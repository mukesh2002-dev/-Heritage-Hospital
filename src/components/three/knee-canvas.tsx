"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Float, ContactShadows } from "@react-three/drei";

function Femur() {
  return (
    <group position={[0, 1.15, 0]} rotation={[0, 0, 0]}>
      <mesh castShadow position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.22, 0.3, 1.8, 20]} />
        <meshPhysicalMaterial color="#e0f2fe" emissive="#38bdf8" emissiveIntensity={0.3} metalness={0.4} roughness={0.25} clearcoat={0.5} />
      </mesh>
      <mesh castShadow position={[0, -0.15, 0]}>
        <capsuleGeometry args={[0.3, 0.5, 8, 20]} />
        <meshPhysicalMaterial color="#bae6fd" emissive="#38bdf8" emissiveIntensity={0.35} metalness={0.4} roughness={0.25} clearcoat={0.6} />
      </mesh>
    </group>
  );
}

function Tibia() {
  return (
    <group position={[0, -1.05, 0]}>
      <mesh castShadow position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.26, 0.18, 1.8, 20]} />
        <meshPhysicalMaterial color="#f0f9ff" emissive="#38bdf8" emissiveIntensity={0.25} metalness={0.4} roughness={0.25} clearcoat={0.5} />
      </mesh>
    </group>
  );
}

function Patella() {
  return (
    <mesh position={[0, 0.15, 0.42]} castShadow>
      <sphereGeometry args={[0.28, 20, 20]} />
      <meshPhysicalMaterial color="#cffafe" emissive="#2dd4bf" emissiveIntensity={0.5} metalness={0.5} roughness={0.2} clearcoat={0.6} />
    </mesh>
  );
}

function Meniscus() {
  return (
    <group position={[0, 0.05, 0]}>
      {[0, Math.PI, Math.PI / 2, Math.PI * 1.5].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, r]} position={[0, 0, 0]}>
          <torusGeometry args={[0.34, 0.05, 8, 16, Math.PI * 0.55]} />
          <meshPhysicalMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={0.5} metalness={0.3} roughness={0.2} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function KneeModel() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.8 + Math.sin(t * 0.3) * 0.25, 2, 0.016);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, state.pointer.y * 0.2, 2, 0.016);
  });

  return (
    <group ref={group} scale={1.15}>
      <Femur />
      <Tibia />
      <Meniscus />
      <Patella />
    </group>
  );
}

export function KneeScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.5], fov: 40 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 6]} intensity={1.3} />
        <pointLight position={[0, 0, 4]} intensity={1.6} color="#5eead4" />
        <Float speed={1.6} rotationIntensity={0.1} floatIntensity={0.6}>
          <KneeModel />
        </Float>
        <ContactShadows position={[0, -2.6, 0]} opacity={0.35} scale={10} blur={2.8} far={4} />
      </Suspense>
    </Canvas>
  );
}
