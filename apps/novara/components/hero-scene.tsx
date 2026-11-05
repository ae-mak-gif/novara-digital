"use client";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function Canopy() {
  const points: [number, number, number][] = Array.from({ length: 64 }, (_, i) => {
    const a = (i / 64) * Math.PI * 2;
    const r = 1.25 + Math.sin(i * 2.17) * 0.16;
    return [Math.cos(a) * r, 1.5 + Math.sin(i * 1.7) * 0.25, Math.sin(a) * r * 0.68];
  });
  return <group>
    {points.map((p, i) => <mesh key={i} position={p}><icosahedronGeometry args={[0.035, 1]} /><meshStandardMaterial color="#286449" roughness={0.4} /></mesh>)}
    {points.map((p, i) => {
      const q = points[(i + 1) % points.length];
      const a = new THREE.Vector3(...p), b = new THREE.Vector3(...q), d = b.clone().sub(a);
      return <mesh key={"net" + i} position={a.clone().add(b).multiplyScalar(.5).toArray()} quaternion={new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize())}>
        <cylinderGeometry args={[.006, .006, d.length(), 5]} /><meshStandardMaterial color="#286449" />
      </mesh>;
    })}
    {points.filter((_, i) => i % 4 === 0).map((p, i) => <mesh key={"node" + i} position={[p[0] * .72, p[1] + .12, p[2] * .72]}><sphereGeometry args={[.025, 12, 12]} /><meshStandardMaterial color="#C6A45A" metalness={.65} roughness={.25} /></mesh>)}
  </group>;
}

function Baobab() {
  return <group position={[0, -.45, 0]}>
    <mesh position={[0, .45, 0]} scale={[.28, 1.1, .25]}><cylinderGeometry args={[.42, .58, 1.7, 32]} /><meshStandardMaterial color="#C6A45A" metalness={.72} roughness={.24} /></mesh>
    {[-.72, -.38, .38, .72].map((x, i) => <mesh key={i} position={[x * .52, 1.18 + (i % 2) * .08, 0]} rotation={[0, 0, -x * .55]} scale={[.1, .72, .1]}><cylinderGeometry args={[.12, .2, 1, 16]} /><meshStandardMaterial color="#C6A45A" metalness={.7} roughness={.25} /></mesh>)}
    <Canopy />
    <mesh position={[0, -.42, 0]} scale={[1.15, .12, .8]}><cylinderGeometry args={[.8, .95, .18, 48]} /><meshStandardMaterial color="#174D37" /></mesh>
  </group>;
}

export default function HeroScene() {
  return <div className="hero-canvas" role="img" aria-label="Three-dimensional golden baobab with interconnected green canopy">
    <Canvas camera={{ position: [0, 1.5, 5.8], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}><ambientLight intensity={1.4} /><directionalLight position={[3, 5, 4]} intensity={3} color="#fff2d4" /><pointLight position={[-3, 1, -2]} intensity={2} color="#9bc5a7" />
        <Float speed={1.1} rotationIntensity={.12} floatIntensity={.18}><Baobab /></Float>
        <ContactShadows position={[0, -.9, 0]} opacity={.22} scale={5} blur={2.5} far={3} /><Environment preset="studio" />
      </Suspense>
    </Canvas>
  </div>;
}
