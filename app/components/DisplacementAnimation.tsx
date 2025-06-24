'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Vertex Shader as a string literal
const vertexShader = `
    varying vec2 vUv;

    void main() {
        vUv = uv; // Reverted to original UV mapping
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

// Fragment Shader as a string literal
const fragmentShader = `
    uniform sampler2D u_texture1;
    uniform float u_progress;
    uniform vec2 u_mouse;
    uniform vec2 u_resolution; // Added to help with blur offset calculation

    varying vec2 vUv;

    out vec4 FragColor;

    #ifndef GL_ES
    #define lowp
    #define mediump
    #define highp
    #endif
    const float PI = 3.14159265359;

    float rand(vec2 co) {
        return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 fp = fract(p);

        fp = fp * fp * (3.0 - 2.0 * fp);

        float tl = rand(ip);
        float tr = rand(ip + vec2(1.0, 0.0));
        float bl = rand(ip + vec2(0.0, 1.0));
        float br = rand(ip + vec2(1.0, 1.0));

        return mix(mix(tl, tr, fp.x), mix(bl, br, fp.x), fp.y);
    }

    void main() {
        vec2 uv = vUv;
        vec2 normalizedMouse = u_mouse; // Use the lagged mouse position

        float base_noise_value = noise(uv * 8.0 + u_progress * 4.0);
        vec2 base_displacement = vec2(base_noise_value, base_noise_value) * 0.03;

        vec2 direction_to_mouse = normalizedMouse - uv;
        float dist_to_mouse = length(direction_to_mouse);

        float mouse_strength = smoothstep(0.2, 0.01, dist_to_mouse);

        vec2 mouse_displacement = normalize(direction_to_mouse) * mouse_strength * 0.08;

        vec2 final_uv_displaced = uv + base_displacement + mouse_displacement;

        // --- Add Blur Effect ---
        float blurRadius = 0.002;
        vec2 onePixel = vec2(1.0 / u_resolution.x, 1.0 / u_resolution.y);
        vec2 blurOffset = onePixel * blurRadius * 5.0;

        vec4 blurredColor = vec4(0.0);
        float totalSamples = 0.0;

        for (int x = -1; x <= 1; x++) {
            for (int y = -1; y <= 1; y++) {
                vec2 offsetUV = final_uv_displaced + vec2(float(x), float(y)) * blurOffset;
                blurredColor += texture2D(u_texture1, offsetUV);
                totalSamples += 1.0;
            }
        }
        FragColor = blurredColor / totalSamples;
    }
`;

const DisplacementAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const animatedMouse = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let animationFrameId: number;

    const init = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 2;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      sceneRef.current = scene;
      cameraRef.current = camera;
      rendererRef.current = renderer;

      const textureLoader = new THREE.TextureLoader();
      const image1Url = 'https://images.unsplash.com/photo-1706708709028-9ed38f34115f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

      textureLoader.load(image1Url,
        (texture1) => {
          texture1.minFilter = THREE.LinearFilter;
          texture1.magFilter = THREE.LinearFilter;
          texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
          // Removed: texture1.flipY = false;

          const uniforms = {
            u_texture1: { value: texture1 },
            u_progress: { value: 0.0 },
            u_mouse: { value: animatedMouse.current },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
          };

          const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            glslVersion: THREE.GLSL3
          });
          materialRef.current = material;

          const imageAspectRatio = texture1.image.width / texture1.image.height;
          const screenAspectRatio = window.innerWidth / window.innerHeight;

          let planeWidth;
          let planeHeight;

          const visibleHeightAtZ = 2 * Math.tan((camera.fov / 2) * Math.PI / 180) * Math.abs(camera.position.z);
          const visibleWidthAtZ = visibleHeightAtZ * camera.aspect;

          if (screenAspectRatio > imageAspectRatio) {
            planeHeight = visibleHeightAtZ;
            planeWidth = planeHeight * imageAspectRatio;
          } else {
            planeWidth = visibleWidthAtZ;
            planeHeight = planeWidth / imageAspectRatio;
          }

          const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);

          const mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);
          meshRef.current = mesh;

          // Keep global image scaling
          const globalImageScaleFactor = 1.8;
          mesh.scale.set(globalImageScaleFactor, globalImageScaleFactor, 1);

          // --- Add Image Translation Factor ---
          // Adjust these values to move the image within the canvas.
          // Values are relative to the plane's calculated width/height.
          // For example, 0.1 * planeWidth will move it 10% of the plane's width to the right.
          // You might need to experiment with these values based on your desired layout.
          const imageTranslateX = 0.2; // Example: 0.1 to move right
          const imageTranslateY = 0.0; // Example: 0.05 to move up
          mesh.position.set(
              imageTranslateX * planeWidth,
              imageTranslateY * planeHeight,
              0 // Z position remains 0 (on the same plane as camera focus)
          );
          // ------------------------------------

          gsap.to(material.uniforms.u_progress, {
            value: 1,
            duration: 10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });

          animate();
        },
        undefined,
        (error) => {
          console.error('Error loading texture:', error);
        }
      );
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      animatedMouse.current.lerp(targetMouse.current, 0.05);

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    const onWindowResize = () => {
      if (cameraRef.current && rendererRef.current && materialRef.current && meshRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();

        rendererRef.current.setSize(window.innerWidth, window.innerHeight);

        materialRef.current.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);

        const texture = materialRef.current.uniforms.u_texture1.value;
        if (texture && texture.image) {
            const imageAspectRatio = texture.image.width / texture.image.height;
            const screenAspectRatio = window.innerWidth / window.innerHeight;

            let planeWidth;
            let planeHeight;

            const visibleHeightAtZ = 2 * Math.tan((cameraRef.current.fov / 2) * Math.PI / 180) * Math.abs(cameraRef.current.position.z);
            const visibleWidthAtZ = visibleHeightAtZ * cameraRef.current.aspect;

            if (screenAspectRatio > imageAspectRatio) {
                planeHeight = visibleHeightAtZ;
                planeWidth = planeHeight * imageAspectRatio;
            } else {
                planeWidth = visibleWidthAtZ;
                planeHeight = planeWidth / imageAspectRatio;
            }

            meshRef.current.geometry.dispose();
            meshRef.current.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);

            // Reapply global scale on resize
            const globalImageScaleFactor = 0.9;
            meshRef.current.scale.set(globalImageScaleFactor, globalImageScaleFactor, 1);

            // Reapply translation on resize
            const imageTranslateX = 0.0;
            const imageTranslateY = 0.0;
            meshRef.current.position.set(
                imageTranslateX * planeWidth,
                imageTranslateY * planeHeight,
                0
            );
        }
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      targetMouse.current.x = event.clientX / window.innerWidth;
      targetMouse.current.y = 1.0 - (event.clientY / window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);

    init();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (materialRef.current) {
        materialRef.current.dispose();
        if (materialRef.current.uniforms.u_texture1.value) {
            materialRef.current.uniforms.u_texture1.value.dispose();
        }
      }
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default DisplacementAnimation;