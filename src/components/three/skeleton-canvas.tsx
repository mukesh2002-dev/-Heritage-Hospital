"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Float, ContactShadows } from "@react-three/drei";

function usePointerRig() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const targetX = state.pointer.y * 0.35;
    const targetY = state.pointer.x * 0.55;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 2.5, 0.016);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 2.5, 0.016);
  });
  return group;
}

export function HeroSkeleton() {
  const group = usePointerRig();

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        <SkeletonModel />
      </Float>
    </group>
  );
}

function Bone({
  position,
  rotation,
  scale,
  color = "#7dd3fc",
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale} castShadow>
      <capsuleGeometry args={[0.22, 1, 6, 12]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.25}
        metalness={0.35}
        roughness={0.25}
        transparent
        opacity={0.95}
        clearcoat={0.4}
      />
    </mesh>
  );
}

function Vertebra({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <mesh position={position} scale={scale} castShadow>
      <torusGeometry args={[0.52, 0.16, 10, 18]} />
      <meshPhysicalMaterial
        color="#a5f3fc"
        emissive="#38bdf8"
        emissiveIntensity={0.2}
        metalness={0.4}
        roughness={0.3}
        clearcoat={0.5}
      />
    </mesh>
  );
}

function SkeletonModel() {
  const spineCount = 12;
  const vertebrae = Array.from({ length: spineCount }).map((_, i) => ({
    pos: [0, 1.15 - i * 0.34, 0] as [number, number, number],
    scale: 1 - i * 0.015,
  }));

  return (
    <group>
      {/* Skull */}
      <mesh position={[0, 3.35, 0]} scale={[0.85, 1.05, 0.95]} castShadow>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshPhysicalMaterial color="#e0f2fe" emissive="#38bdf8" emissiveIntensity={0.3} metalness={0.3} roughness={0.25} transparent opacity={0.9} clearcoat={0.4} />
      </mesh>

      {/* Spine */}
      {vertebrae.map((v, i) => (
        <Vertebra key={i} position={v.pos} scale={v.scale} />
      ))}

      {/* Ribs */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <group key={i} position={[0, 2.6 - i * 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh castShadow>
            <torusGeometry args={[0.95 + i * 0.04, 0.07, 8, 40, Math.PI * 0.55]} />
            <meshPhysicalMaterial color="#e0f2fe" emissive="#38bdf8" emissiveIntensity={0.25} metalness={0.3} roughness={0.3} transparent opacity={0.8} clearcoat={0.3} />
          </mesh>
        </group>
      ))}

      {/* Pelvis */}
      <mesh position={[0, 0.9, 0]} rotation={[0.4, 0, 0]} castShadow>
        <torusGeometry args={[0.9, 0.18, 10, 30, Math.PI * 1.1]} />
        <meshPhysicalMaterial color="#bae6fd" emissive="#38bdf8" emissiveIntensity={0.25} metalness={0.35} roughness={0.3} transparent opacity={0.9} clearcoat={0.4} />
      </mesh>

      {/* Femurs */}
      <Bone position={[-0.4, 0.05, 0.1]} rotation={[0, 0, 0.25]} scale={[1, 1.5, 1]} />
      <Bone position={[0.4, 0.05, 0.1]} rotation={[0, 0, -0.25]} scale={[1, 1.5, 1]} />

      {/* Tibias */}
      <Bone position={[-0.45, -1.4, 0.05]} rotation={[0, 0, 0.12]} scale={[0.8, 1.35, 1]} />
      <Bone position={[0.45, -1.4, 0.05]} rotation={[0, 0, -0.12]} scale={[0.8, 1.35, 1]} />

      {/* Arms */}
      <Bone position={[-1.15, 2.5, -0.15]} rotation={[0, 0, 0.45]} scale={[0.65, 1.3, 1]} />
      <Bone position={[1.15, 2.5, -0.15]} rotation={[0, 0, -0.45]} scale={[0.65, 1.3, 1]} />

      {/* Clavicles */}
      <Bone position={[-0.5, 3.1, -0.1]} rotation={[0, 0, 0.4]} scale={[0.6, 0.6, 0.6]} />
      <Bone position={[0.5, 3.1, -0.1]} rotation={[0, 0, -0.4]} scale={[0.6, 0.6, 0.6]} />
    </group>
  );
}

export function SceneCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.5, 7.5], fov: 42 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} color="#7dd3fc" />
        <directionalLight position={[-4, -2, 2]} intensity={0.8} color="#5eead4" />
        <pointLight position={[0, 0, 3]} intensity={1.2} color="#38bdf8" />
        <HeroSkeleton />
        <ContactShadows position={[0, -2.9, 0]} opacity={0.35} scale={12} blur={2.6} far={4} />
      </Suspense>
    </Canvas>
  );
}
