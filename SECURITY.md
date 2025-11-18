# Security Policy

## Security Headers

This document outlines the recommended security headers for the portfolio website.

### Important Note for GitHub Pages

**GitHub Pages does not support custom HTTP headers.** The security headers defined in `next.config.ts` are documented for reference but will **not be applied** when deployed to GitHub Pages.

To implement these security headers, consider:
1. Using a CDN like Cloudflare (recommended)
2. Deploying to a platform that supports custom headers (Vercel, Netlify, etc.)
3. Using a reverse proxy

## Recommended Security Headers

### 1. Strict-Transport-Security (HSTS)
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```
- Forces HTTPS connections for 2 years
- Applies to all subdomains
- Eligible for browser preload list
- **Protection**: Prevents protocol downgrade attacks

### 2. X-Frame-Options
```
X-Frame-Options: SAMEORIGIN
```
- Prevents the site from being embedded in iframes
- Allows embedding only on same origin
- **Protection**: Clickjacking attacks

### 3. X-Content-Type-Options
```
X-Content-Type-Options: nosniff
```
- Prevents MIME type sniffing
- Forces browser to respect declared Content-Type
- **Protection**: MIME confusion attacks

### 4. X-XSS-Protection
```
X-XSS-Protection: 1; mode=block
```
- Enables browser's XSS filter
- Blocks page if XSS attack detected
- **Protection**: Reflected XSS attacks (legacy browsers)

### 5. Referrer-Policy
```
Referrer-Policy: strict-origin-when-cross-origin
```
- Sends full URL for same-origin requests
- Sends only origin for cross-origin requests
- **Protection**: Privacy protection, information leakage

### 6. Permissions-Policy
```
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```
- Disables camera, microphone, geolocation access
- Disables FLoC (privacy)
- **Protection**: Unwanted feature access, tracking

### 7. Content-Security-Policy (CSP)
```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self';
  media-src 'self';
  object-src 'none';
  frame-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
```
- Controls which resources can be loaded
- Prevents inline scripts (except where needed for animations)
- **Protection**: XSS, data injection, unauthorized resource loading

**Note**: This CSP allows `unsafe-inline` and `unsafe-eval` for compatibility with:
- Framer Motion animations
- GSAP animations
- Dynamic styling

## Implementing Headers with Cloudflare

If using Cloudflare (free plan):

1. **Enable HTTPS/SSL**
   - SSL/TLS > Overview > Full (strict)
   - Edge Certificates > Always Use HTTPS: On

2. **Transform Rules (Headers)**
   - Rules > Transform Rules > Modify Response Header
   - Add each header from the list above

3. **Example Cloudflare Worker** (for advanced control):
```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  const newHeaders = new Headers(response.headers)

  // Add security headers
  newHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  newHeaders.set('X-Frame-Options', 'SAMEORIGIN')
  newHeaders.set('X-Content-Type-Options', 'nosniff')
  newHeaders.set('X-XSS-Protection', '1; mode=block')
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  newHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  })
}
```

## Alternative Deployment Options

If you need these headers to work automatically:

### Vercel
- Headers in `next.config.ts` work automatically
- No additional configuration needed
- Free tier available

### Netlify
- Create `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## Testing Security Headers

After implementing headers, test with:

1. **Security Headers Scanner**
   - https://securityheaders.com/
   - Provides grade and recommendations

2. **Mozilla Observatory**
   - https://observatory.mozilla.org/
   - Comprehensive security analysis

3. **Browser DevTools**
   - Open DevTools > Network tab
   - Click any request
   - Check Response Headers

## Security Best Practices

Beyond headers, this site implements:

✅ **Input sanitization** - React automatically escapes content
✅ **HTTPS only** - GitHub Pages enforces HTTPS
✅ **No sensitive data** - Static site, no backend secrets
✅ **Dependency updates** - Regular security patches
✅ **Type safety** - TypeScript prevents many vulnerabilities
✅ **Error boundaries** - Graceful error handling
✅ **No inline scripts** - (where possible) Reduces XSS risk

## Reporting Security Issues

If you discover a security vulnerability, please report it via:
- GitHub Issues (for non-critical issues)
- Email: hirushadinil@gmail.com (for critical vulnerabilities)

Please do not publicly disclose security issues until they are resolved.

## Security Checklist

- [ ] Deploy with CDN (Cloudflare/Vercel/Netlify)
- [ ] Configure security headers
- [ ] Enable HTTPS
- [ ] Test with securityheaders.com
- [ ] Regular dependency updates
- [ ] Monitor for security advisories

---

**Last Updated**: 2025-01-18
