"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useMemo, useRef } from "react";
import { Float, ContactShadows } from "@react-three/drei";

function Vertebra({
  position,
  scale = 1,
  hue,
}: {
  position: [number, number, number];
  scale?: number;
  hue: number;
}) {
  const color = new THREE.Color(`hsl(${hue} 90% 65%)`);
  return (
    <group position={position} scale={scale} rotation={[0.5, 0, 0]}>
      <mesh castShadow>
        <torusGeometry args={[0.72, 0.16, 12, 24]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          metalness={0.45}
          roughness={0.25}
          clearcoat={0.5}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.2, 0]} castShadow>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          metalness={0.3}
          roughness={0.3}
          clearcoat={0.4}
        />
      </mesh>
      <mesh position={[0.72, 0, 0]} rotation={[0.5, 0, 0]}>
        <sphereGeometry args={[0.13, 12, 12]} />
        <meshPhysicalMaterial color="#5eead4" emissive="#5eead4" emissiveIntensity={0.6} metalness={0.4} roughness={0.2} />
      </mesh>
      <mesh position={[-0.72, 0, 0]} rotation={[0.5, 0, 0]}>
        <sphereGeometry args={[0.13, 12, 12]} />
        <meshPhysicalMaterial color="#5eead4" emissive="#5eead4" emissiveIntensity={0.6} metalness={0.4} roughness={0.2} />
      </mesh>
    </group>
  );
}

function SpineModel() {
  const group = useRef<THREE.Group>(null);
  const count = 16;

  const vertebrae = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        pos: [0, (count / 2 - i) * 0.62, 0] as [number, number, number],
        scale: 1 - i * 0.012,
        hue: 190 + i * 3,
      })),
    [count],
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, Math.sin(t * 0.35) * 0.45 + state.pointer.x * 0.5, 2, 0.016);
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, state.pointer.y * 0.15, 2, 0.016);
    group.current.position.y = Math.sin(t * 0.6) * 0.08;
  });

  return (
    <group ref={group}>
      {vertebrae.map((v, i) => (
        <Vertebra key={i} position={v.pos} scale={v.scale} hue={v.hue} />
      ))}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, count * 0.62, 16]} />
        <meshPhysicalMaterial color="#0b6e99" emissive="#0b6e99" emissiveIntensity={0.8} metalness={0.5} roughness={0.2} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export function SpineScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 5, 6]} intensity={1.3} />
        <pointLight position={[0, 3, 4]} intensity={1.4} color="#5eead4" />
        <Float speed={1.6} rotationIntensity={0.12} floatIntensity={0.5}>
          <SpineModel />
        </Float>
        <ContactShadows position={[0, -4.6, 0]} opacity={0.3} scale={10} blur={2.8} far={4} />
      </Suspense>
    </Canvas>
  );
}
