"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useMemo, useRef } from "react";
import { ContactShadows } from "@react-three/drei";

function DnaModel({ speed = 0.6 }: { speed?: number }) {
  const group = useRef<THREE.Group>(null);
  const turns = 4;
  const segments = 48;

  const strand1 = useMemo(
    () =>
      Array.from({ length: segments }).map((_, i) => {
        const t = i / (segments - 1);
        const angle = t * Math.PI * 2 * turns;
        return {
          pos: [Math.cos(angle) * 1.1, (t - 0.5) * 6.4, Math.sin(angle) * 1.1] as [number, number, number],
          hue: 185 + Math.sin(angle) * 20,
        };
      }),
    [segments],
  );

  const strand2 = useMemo(
    () =>
      strand1.map((s) => ({
        pos: [-s.pos[0], s.pos[1], -s.pos[2]] as [number, number, number],
        hue: s.hue + 40,
      })),
    [strand1],
  );

  const rungs = useMemo(
    () =>
      Array.from({ length: Math.floor(segments / 2) }).map((_, i) => {
        const s1 = strand1[i * 2];
        const s2 = strand2[i * 2];
        const mid = [
          (s1.pos[0] + s2.pos[0]) / 2,
          (s1.pos[1] + s2.pos[1]) / 2,
          (s1.pos[2] + s2.pos[2]) / 2,
        ] as [number, number, number];
        const dir = new THREE.Vector3(...s2.pos).sub(new THREE.Vector3(...s1.pos));
        return { pos: mid, dir, i };
      }),
    [strand1, strand2],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += speed * 0.008;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, state.pointer.y * 0.2, 2, 0.016);
  });

  const sphereMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#14b8a6",
        emissive: "#14b8a6",
        emissiveIntensity: 0.5,
        metalness: 0.4,
        roughness: 0.2,
        clearcoat: 0.6,
      }),
    [],
  );
  const sphereMat2 = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#0b6e99",
        emissive: "#0b6e99",
        emissiveIntensity: 0.5,
        metalness: 0.4,
        roughness: 0.2,
        clearcoat: 0.6,
      }),
    [],
  );

  return (
    <group ref={group} position={[0, 0, 0]}>
      {strand1.map((s, i) => (
        <mesh key={`a${i}`} position={s.pos} material={sphereMat}>
          <sphereGeometry args={[0.2, 12, 12]} />
        </mesh>
      ))}
      {strand2.map((s, i) => (
        <mesh key={`b${i}`} position={s.pos} material={sphereMat2}>
          <sphereGeometry args={[0.2, 12, 12]} />
        </mesh>
      ))}
      {rungs.map((r, i) => (
        <mesh key={`r${i}`} position={r.pos} scale={[1, 1, 1]}>
          <boxGeometry args={[r.dir.length(), 0.05, 0.05]} />
          <meshPhysicalMaterial color="#e2e8f0" emissive="#0b6e99" emissiveIntensity={0.4} metalness={0.5} roughness={0.3} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}

export function DnaScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 6]} intensity={1.2} />
        <pointLight position={[0, 0, 5]} intensity={1.6} color="#5eead4" />
        <DnaModel />
        <ContactShadows position={[0, -4.2, 0]} opacity={0.3} scale={12} blur={2.6} far={4} />
      </Suspense>
    </Canvas>
  );
}
