import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { ShaderPass } from 'postprocessing';
// Custom shader material for pixelated retro glitch effect
class PixelatedGlitchMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0 },
        resolution: { value: new THREE.Vector2() },
        // Glitch parameters
        shakePower: { value: 0.03 },
        shakeRate: { value: 0.2 },
        shakeSpeed: { value: 5.0 },
        shakeBlockSize: { value: 30.5 },
        shakeColorRate: { value: 0.01 },
        // Pixelation parameters
        pixelSize: { value: 4.0 },
        pixelBorderWidth: { value: 0.1 },
        pixelBorderColor: { value: new THREE.Color(0, 0, 0) },
        // Color quantization
        colorLevels: { value: 16 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform vec2 resolution;

        // Glitch parameters
        uniform float shakePower;
        uniform float shakeRate;
        uniform float shakeSpeed;
        uniform float shakeBlockSize;
        uniform float shakeColorRate;

        // Pixelation parameters
        uniform float pixelSize;
        uniform float pixelBorderWidth;
        uniform vec3 pixelBorderColor;

        // Color quantization
        uniform int colorLevels;

        varying vec2 vUv;

        float random(float seed) {
          return fract(543.2543 * sin(dot(vec2(seed, seed), vec2(3525.46, -54.3415))));
        }

        void main() {
          // 1. Apply glitch effect
          float enableShift = float(
            random(trunc(time * shakeSpeed)) < shakeRate
          );

          vec2 fixedUv = vUv;
          fixedUv.x += (
            random(
              (trunc(vUv.y * shakeBlockSize) / shakeBlockSize) + time
            ) - 0.5
          ) * shakePower * enableShift;

          // 2. Apply pixelation
          vec2 pixelatedUv = floor(fixedUv * resolution / pixelSize) * pixelSize / resolution;
          vec4 pixelColor = texture2D(tDiffuse, pixelatedUv);

          // 3. Apply chromatic aberration
          if (enableShift > 0.5) {
            pixelColor.r = texture2D(tDiffuse, pixelatedUv + vec2(shakeColorRate, 0.0)).r;
            pixelColor.b = texture2D(tDiffuse, pixelatedUv + vec2(-shakeColorRate, 0.0)).b;
          }

          // 4. Color quantization
          pixelColor.rgb = floor(pixelColor.rgb * float(colorLevels)) / float(colorLevels);

          // 5. Add pixel grid
          vec2 gridPos = fract(fixedUv * resolution / pixelSize);
          float grid = (gridPos.x < pixelBorderWidth || gridPos.y < pixelBorderWidth) ? 1.0 : 0.0;
          pixelColor.rgb = mix(pixelColor.rgb, pixelBorderColor, grid * 0.5);

          // 6. Add scanlines
          float scanline = sin(vUv.y * resolution.y * 1.0) * 0.05 + 0.95;
          pixelColor.rgb *= scanline;

          // 7. Add vignette
          float vignette = length(vec2(0.5, 0.5) - vUv) * 0.8;
          pixelColor.rgb *= (1.0 - vignette * vignette);

          gl_FragColor = pixelColor;
        }
      `
    });
  }
}

// Register the custom material
extend({ PixelatedGlitchMaterial });
extend({ ShaderPass });
// Create a post-processing effect component
export function PixelatedGlitchEffect({
  // Glitch parameters
  shakePower = 0.03,
  shakeRate = 0.2,
  shakeSpeed = 5.0,
  shakeBlockSize = 30.5,
  shakeColorRate = 0.01,
  // Pixelation parameters
  pixelSize = 4.0,
  pixelBorderWidth = 0.1,
  pixelBorderColor = new THREE.Color(0, 0, 0),
  // Color quantization
  colorLevels = 16,
  // Control
  isActive = true
}) {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      // Update time and resolution
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.resolution.value.set(
        state.size.width,
        state.size.height
      );

      // Control effect activation
      materialRef.current.uniforms.shakeRate.value = isActive ? shakeRate : 0;
      materialRef.current.uniforms.pixelSize.value = isActive ? pixelSize : 1.0;
    }
  });

  return (
    <pixelatedGlitchMaterial
      ref={materialRef}
      shakePower={shakePower}
      shakeRate={shakeRate}
      shakeSpeed={shakeSpeed}
      shakeBlockSize={shakeBlockSize}
      shakeColorRate={shakeColorRate}
      pixelSize={pixelSize}
      pixelBorderWidth={pixelBorderWidth}
      pixelBorderColor={pixelBorderColor}
      colorLevels={colorLevels}
    />
  );
}

// Example usage with Effect Composer
export function PixelatedGlitchPass({ isActive = true, ...props }) {
  const effect = useRef();

  return (
    <shaderPass ref={effect} args={[PixelatedGlitchMaterial]}>
      <PixelatedGlitchEffect isActive={isActive} {...props} />
    </shaderPass>
  );
}
