import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useRef, useState } from "react";
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref";
import * as THREE from "three";

function NS() {
  const ref = useRef<any>(null);
  const [hover, setHover] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.2;

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    const targetEmissive = hover ? 1.8 : 1.0;

    ref.current.material.emissiveIntensity = targetEmissive * pulse;
  });

  return (
    <Text
      ref={ref}
      fontSize={1.5}
      anchorX="center"
      anchorY="middle"
      letterSpacing={0.02}
      color="#00B2A9"
      material={
        new THREE.MeshStandardMaterial({
          color: "#00B2A9",
          emissive: new THREE.Color("#00B2A9"),
          emissiveIntensity: 1,
          side: THREE.DoubleSide,
          wireframe: false,
        })
      }
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      NS
    </Text>
  );
}

export default function Initials3D() {
  const reduced = useReducedMotionPref();

  if (reduced) {
    return (
      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-[#071A3F] to-[#0B2540]">
        <svg width="140" height="140" viewBox="0 0 140 140" role="img" aria-label="NS">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#00B2A9" />
              <stop offset="100%" stopColor="#5FE4DE" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="72"
            fontFamily="Poppins, Inter, sans-serif"
            fill="url(#g)"
          >
            NS
          </text>
        </svg>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#00B2A9" />

      <Suspense fallback={null}>
        <Float speed={0.5} rotationIntensity={0.2} floatIntensity={1}>
          <NS />
        </Float>
      </Suspense>

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>

      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}
