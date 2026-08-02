"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";
import * as React from "react";
import { Suspense, useMemo, useRef } from "react";

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function ParticleField({ count = 1400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const c1 = new THREE.Color("#0b6e99");
    const c2 = new THREE.Color("#14b8a6");
    const c3 = new THREE.Color("#38bdf8");
    const rand = mulberry32(1337);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rand() - 0.5) * 24;
      positions[i * 3 + 1] = (rand() - 0.5) * 14;
      positions[i * 3 + 2] = (rand() - 0.5) * 12;

      const pick = rand();
      const color = pick < 0.4 ? c1 : pick < 0.75 ? c2 : c3;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    points.current.rotation.y = t * 0.02;
    points.current.position.y = Math.sin(t * 0.2) * 0.3;
    const mat = points.current.material as THREE.PointsMaterial;
    mat.size = 0.045 + Math.sin(t * 0.8) * 0.012;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.7}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function useResponsiveCount() {
  const reduceMotion = useReducedMotion();
  return React.useMemo(() => {
    if (reduceMotion) return 0;
    if (typeof window === "undefined") return 480;
    return window.innerWidth < 768 ? 220 : 480;
  }, [reduceMotion]);
}

export function MedicalParticles({ count, className }: { count?: number; className?: string }) {
  const responsiveCount = useResponsiveCount();
  const particleCount = count ?? responsiveCount;

  if (particleCount === 0) return null;

  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ParticleField count={particleCount} />
        </Suspense>
      </Canvas>
    </div>
  );
}
