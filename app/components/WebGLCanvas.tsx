'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const advectionShader = `
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 uTexSize;
  uniform float uDt;
  uniform float uViscosity;
  varying vec2 vUv;

  void main() {
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    vec2 coord = vUv - velocity * uDt / uTexSize;
    coord = clamp(coord, 0.0, 1.0);
    vec2 newVel = texture2D(uSource, coord).xy;
    newVel *= (1.0 - uViscosity);
    gl_FragColor = vec4(newVel, 0.0, 1.0);
  }
`;

const divergenceShader = `
  uniform sampler2D uVelocity;
  uniform vec2 uTexSize;
  varying vec2 vUv;

  void main() {
    float left   = texture2D(uVelocity, vUv + vec2(-1.0/uTexSize.x, 0.0)).x;
    float right  = texture2D(uVelocity, vUv + vec2(1.0/uTexSize.x, 0.0)).x;
    float bottom = texture2D(uVelocity, vUv + vec2(0.0, -1.0/uTexSize.y)).y;
    float top    = texture2D(uVelocity, vUv + vec2(0.0, 1.0/uTexSize.y)).y;
    float div = (right - left + top - bottom) * 0.5;
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
  }
`;

const pressureShader = `
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;
  uniform vec2 uTexSize;
  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / uTexSize;
    float left   = texture2D(uPressure, vUv - vec2(texel.x, 0.0)).r;
    float right  = texture2D(uPressure, vUv + vec2(texel.x, 0.0)).r;
    float bottom = texture2D(uPressure, vUv - vec2(0.0, texel.y)).r;
    float top    = texture2D(uPressure, vUv + vec2(0.0, texel.y)).r;
    float div    = texture2D(uDivergence, vUv).r;
    float pressure = (left + right + bottom + top - div) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`;

const gradientSubtractShader = `
  uniform sampler2D uVelocity;
  uniform sampler2D uPressure;
  uniform vec2 uTexSize;
  varying vec2 vUv;

  void main() {
    float left   = texture2D(uPressure, vUv - vec2(1.0/uTexSize.x, 0.0)).r;
    float right  = texture2D(uPressure, vUv + vec2(1.0/uTexSize.x, 0.0)).r;
    float bottom = texture2D(uPressure, vUv - vec2(0.0, 1.0/uTexSize.y)).r;
    float top    = texture2D(uPressure, vUv + vec2(0.0, 1.0/uTexSize.y)).r;
    vec2 vel = texture2D(uVelocity, vUv).xy;
    float xGrad = (right - left) * 0.5;
    float yGrad = (top - bottom) * 0.5;
    vel -= vec2(xGrad, yGrad);
    gl_FragColor = vec4(vel, 0.0, 1.0);
  }
`;

const inkAdvectionShader = `
  uniform sampler2D uVelocity;
  uniform sampler2D uInk;
  uniform vec2 uTexSize;
  uniform float uDt;
  uniform float uColorFade;
  uniform float uAlphaFade;
  varying vec2 vUv;

  void main() {
    vec2 vel = texture2D(uVelocity, vUv).xy;
    vec2 coord = vUv - vel * uDt / uTexSize;
    coord = clamp(coord, 0.0, 1.0);
    vec4 col = texture2D(uInk, coord);
    col.rgb *= uColorFade;
    col.a   *= uAlphaFade;
    gl_FragColor = col;
  }
`;

const displayShader = `
  varying vec2 vUv;
  uniform sampler2D u_bgTexture;
  uniform sampler2D u_bgTexture02;
  uniform sampler2D u_fluidTexture;
  uniform vec2  u_resolution;
  uniform vec2  u_imageResolution;
  uniform float u_distortionAmount;
  uniform float u_rgbShiftAmount;
  uniform float u_fluidThreshold;

  void main() {
    float screenAspect = u_resolution.x / u_resolution.y;
    float imageAspect  = u_imageResolution.x / u_imageResolution.y;

    vec2 ratio = vec2(
      max(screenAspect / imageAspect, 1.0),
      max((1.0 / screenAspect) / (1.0 / imageAspect), 1.0)
    );
    vec2 coverUV = vec2(
      vUv.x * ratio.x - (ratio.x - 1.0) * 0.5,
      vUv.y * ratio.y - (ratio.y - 1.0) * 0.5
    );

    vec4 fluid       = texture2D(u_fluidTexture, vUv);
    vec2 fluidOffset = (fluid.rg - 0.5) * u_distortionAmount;

    vec2 uv = coverUV + fluidOffset;

    vec4 colorNoShift = texture2D(u_bgTexture, uv);

    vec2 uvShift = uv + u_rgbShiftAmount;
    float r = texture2D(u_bgTexture02, uvShift).r;
    float g = texture2D(u_bgTexture02, uvShift).g;
    float b = texture2D(u_bgTexture02, uvShift).b;
    vec4 colorShifted = vec4(r, g, b, 1.0);

    float mask = clamp(fluid.a - u_fluidThreshold, 0.0, 1.0);

    gl_FragColor = mix(colorShifted, colorNoShift, mask);
  }
`;

const WebGLCanvas = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // --- Fluid Simulation Class ---
        class FluidSim {
            renderer: THREE.WebGLRenderer;
            width: number;
            height: number;
            dt: number;
            viscosity: number;
            scene: THREE.Scene;
            camera: THREE.OrthographicCamera;
            fullQuad: THREE.Mesh;
            velocityRT: THREE.WebGLRenderTarget;
            velocityRT2: THREE.WebGLRenderTarget;
            pressureRT: THREE.WebGLRenderTarget;
            pressureRT2: THREE.WebGLRenderTarget;
            divergenceRT: THREE.WebGLRenderTarget;
            inkRT: THREE.WebGLRenderTarget;
            inkRT2: THREE.WebGLRenderTarget;

            constructor(renderer: THREE.WebGLRenderer, width = 512, height = 512) {
                this.renderer = renderer;
                this.width = width;
                this.height = height;
                this.dt = 10;
                this.viscosity = 0.02;

                this.scene = new THREE.Scene();
                this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
                this.fullQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
                this.scene.add(this.fullQuad);

                const renderTargetOptions = {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    wrapS: THREE.ClampToEdgeWrapping,
                    wrapT: THREE.ClampToEdgeWrapping,
                    format: THREE.RGBAFormat,
                    type: (/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)) ? THREE.UnsignedByteType : THREE.FloatType, // Simplified mobile check
                    depthBuffer: false,
                    stencilBuffer: false,
                };

                this.velocityRT = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);
                this.velocityRT2 = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);
                this.pressureRT = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);
                this.pressureRT2 = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);
                this.divergenceRT = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);
                this.inkRT = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);
                this.inkRT2 = new THREE.WebGLRenderTarget(width, height, renderTargetOptions);

                this.clearRT(this.velocityRT, new THREE.Color(0, 0, 0));
                this.clearRT(this.velocityRT2, new THREE.Color(0, 0, 0));
                this.clearRT(this.pressureRT, new THREE.Color(0, 0, 0));
                this.clearRT(this.pressureRT2, new THREE.Color(0, 0, 0));
                this.clearRT(this.divergenceRT, new THREE.Color(0, 0, 0));
                this.clearRT(this.inkRT, new THREE.Color(0, 0, 0));
                this.clearRT(this.inkRT2, new THREE.Color(0, 0, 0));
            }

            clearRT(target: THREE.WebGLRenderTarget, color: THREE.Color) {
                const currentTarget = this.renderer.getRenderTarget();
                this.renderer.setRenderTarget(target);
                this.renderer.setClearColor(color, 1);
                this.renderer.clear(true, true, true);
                this.renderer.setRenderTarget(currentTarget);
            }

            renderPass(material: THREE.ShaderMaterial, target: THREE.WebGLRenderTarget | null) {
                const currentTarget = this.renderer.getRenderTarget();
                (this.fullQuad.material as THREE.ShaderMaterial) = material;
                this.renderer.setRenderTarget(target);
                this.renderer.render(this.scene, this.camera);
                this.renderer.setRenderTarget(currentTarget);
            }

            update() {
                this.advectVelocity();
                this.computeDivergence();
                this.computePressure();
                this.subtractGradient();
                this.advectInk();
            }

            advectVelocity() {
                const material = new THREE.ShaderMaterial({
                    vertexShader,
                    fragmentShader: advectionShader,
                    uniforms: {
                        uVelocity: { value: this.velocityRT.texture },
                        uSource: { value: this.velocityRT.texture },
                        uTexSize: { value: new THREE.Vector2(this.width, this.height) },
                        uDt: { value: this.dt },
                        uViscosity: { value: this.viscosity },
                    },
                });
                this.renderPass(material, this.velocityRT2);
                this.swapVelocity();
            }
             computeDivergence() {
                const material = new THREE.ShaderMaterial({
                    vertexShader,
                    fragmentShader: divergenceShader,
                    uniforms: {
                        uVelocity: { value: this.velocityRT.texture },
                        uTexSize: { value: new THREE.Vector2(this.width, this.height) },
                    },
                });
                this.renderPass(material, this.divergenceRT);
            }
             computePressure(iterations = 10) {
                for (let i = 0; i < iterations; i++) {
                    const material = new THREE.ShaderMaterial({
                        vertexShader,
                        fragmentShader: pressureShader,
                        uniforms: {
                            uPressure: { value: this.pressureRT.texture },
                            uDivergence: { value: this.divergenceRT.texture },
                            uTexSize: { value: new THREE.Vector2(this.width, this.height) },
                        },
                    });
                    this.renderPass(material, this.pressureRT2);
                    this.swapPressure();
                }
            }

             subtractGradient() {
                const material = new THREE.ShaderMaterial({
                    vertexShader,
                    fragmentShader: gradientSubtractShader,
                    uniforms: {
                        uVelocity: { value: this.velocityRT.texture },
                        uPressure: { value: this.pressureRT.texture },
                        uTexSize: { value: new THREE.Vector2(this.width, this.height) },
                    },
                });
                this.renderPass(material, this.velocityRT2);
                this.swapVelocity();
            }
            advectInk() {
                const material = new THREE.ShaderMaterial({
                    vertexShader,
                    fragmentShader: inkAdvectionShader,
                    uniforms: {
                        uVelocity: { value: this.velocityRT.texture },
                        uInk: { value: this.inkRT.texture },
                        uTexSize: { value: new THREE.Vector2(this.width, this.height) },
                        uDt: { value: this.dt },
                        uColorFade: { value: 0.98 },
                        uAlphaFade: { value: 0.99 },
                    },
                });
                this.renderPass(material, this.inkRT2);
                this.swapInk();
            }

            addVelocity(x: number, y: number, addX: number, addY: number) {
                const material = new THREE.ShaderMaterial({
                    vertexShader,
                    fragmentShader: `
                        uniform sampler2D uVelocity;
                        uniform vec2 uPoint;
                        uniform vec2 uAdd;
                        uniform float uRadius;
                        varying vec2 vUv;
                        void main() {
                          vec2 vel = texture2D(uVelocity, vUv).xy;
                          float dist = distance(vUv, uPoint);
                          if(dist < uRadius){
                            float alpha = 1.0 - dist / uRadius;
                            vel += uAdd * alpha;
                          }
                          gl_FragColor = vec4(vel,0.0,1.0);
                        }
                    `,
                    uniforms: {
                        uVelocity: { value: this.velocityRT.texture },
                        uPoint: { value: new THREE.Vector2(x, y) },
                        uAdd: { value: new THREE.Vector2(addX, addY) },
                        uRadius: { value: 0.03 },
                    },
                });
                this.renderPass(material, this.velocityRT2);
                this.swapVelocity();
            }
            
            addInk(x: number, y: number, r: number, g: number, b: number) {
                const material = new THREE.ShaderMaterial({
                    vertexShader,
                    fragmentShader: `
                        uniform sampler2D uInk;
                        uniform vec2 uPoint;
                        uniform vec3 uColor;
                        uniform float uRadius;
                        varying vec2 vUv;
                        void main(){
                          vec4 oldColor = texture2D(uInk, vUv);
                          float dist = distance(vUv, uPoint);
                          if(dist < uRadius){
                            float alpha = 1.0 - dist / uRadius;
                            vec4 newInk = vec4(uColor, 1.0);
                            oldColor = mix(oldColor, newInk, alpha);
                          }
                          gl_FragColor = oldColor;
                        }
                    `,
                    uniforms: {
                        uInk: { value: this.inkRT.texture },
                        uPoint: { value: new THREE.Vector2(x, y) },
                        uColor: { value: new THREE.Color(r, g, b) },
                        uRadius: { value: 0.04 },
                    },
                });
                this.renderPass(material, this.inkRT2);
                this.swapInk();
            }
            swapVelocity() { [this.velocityRT, this.velocityRT2] = [this.velocityRT2, this.velocityRT]; }
            swapPressure() { [this.pressureRT, this.pressureRT2] = [this.pressureRT2, this.pressureRT]; }
            swapInk() { [this.inkRT, this.inkRT2] = [this.inkRT2, this.inkRT]; }
            getTexture() { return this.inkRT.texture; }
        }


        // --- Main WebGL Scene ---
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        canvasRef.current.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const loader = new THREE.TextureLoader();
        const isMobile = window.innerWidth <= 767;
        const imageResolution = isMobile ? new THREE.Vector2(1356, 2048) : new THREE.Vector2(2048, 1356);
        
        const bgTexture = loader.load(isMobile ? '/herobackground/img8.jpg' : '/herobackground/img8.jpg');
        const bgTexture02 = loader.load(isMobile ? '/herobackground/img8_mono.jpg' : '/herobackground/img8_mono.jpg');
        
        // 'https://v7.usestate.org/images/home/mv-image-sp.webp'

        const fluidSim = new FluidSim(renderer, 512, 512);
        
        const displayMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader: displayShader,
            uniforms: {
                u_bgTexture: { value: bgTexture },
                u_bgTexture02: { value: bgTexture02 },
                u_fluidTexture: { value: fluidSim.getTexture() },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                u_imageResolution: { value: imageResolution },
                u_distortionAmount: { value: 0.02 },
                u_rgbShiftAmount: { value: 0.002 },
                u_fluidThreshold: { value: 0.08 },
            },
        });

        const displayMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), displayMaterial);
        scene.add(displayMesh);

        const clock = new THREE.Clock();
        const emitters = Array.from({ length: 10 }, () => ({
            angle: Math.random() * Math.PI * 2,
            radius: Math.random() * 0.6,
            speed: Math.random() * 0.45 + 0.05,
            size: 0.6,
            prev: { x: 0, y: 0 },
        }));

        const onMouseMove = (event: MouseEvent) => {
            if (!canvasRef.current) return;
            const rect = canvasRef.current.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = 1 - (event.clientY - rect.top) / rect.height;
            const addX = event.movementX / rect.width * 10;
            const addY = -event.movementY / rect.height * 10;
            fluidSim.addVelocity(x, y, addX, addY);
            fluidSim.addInk(x, y, 10, 1, 1);
        };

        if(!isMobile) {
            canvasRef.current.addEventListener('mousemove', onMouseMove);
        }

        const animate = () => {
            const delta = clock.getDelta();
            
            emitters.forEach(emitter => {
                emitter.angle += emitter.speed * delta;
                const x = 0.5 + emitter.radius * Math.cos(emitter.angle);
                const y = 0.5 + emitter.radius * Math.sin(emitter.angle);

                if (emitter.prev.x || emitter.prev.y) {
                    const addX = (x - emitter.prev.x) * 120;
                    const addY = (y - emitter.prev.y) * 120;
                    fluidSim.addVelocity(x, y, addX, addY);
                    fluidSim.addInk(x, y, emitter.size, 0.8, 0.8);
                }
                emitter.prev = { x, y };
            });

            fluidSim.update();
            renderer.setRenderTarget(null);
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            displayMaterial.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', onResize);
            if(canvasRef.current) {
               if(!isMobile) canvasRef.current.removeEventListener('mousemove', onMouseMove);
                canvasRef.current.removeChild(renderer.domElement);
            }
            // Dispose Three.js objects
            bgTexture.dispose();
            bgTexture02.dispose();
            displayMaterial.dispose();
            displayMesh.geometry.dispose();
            // TODO: Dispose fluid sim render targets and materials
        };
    }, []);

    return <div ref={canvasRef} className="p-home-mv__background absolute top-0 left-0 w-full h-full overflow-hidden"></div>;
};

export default WebGLCanvas;

