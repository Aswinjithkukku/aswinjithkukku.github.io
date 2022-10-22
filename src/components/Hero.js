// import { PerspectiveCamera } from '@react-three/drei'
import React, { Fragment } from "react";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
// import { PerspectiveCamera } from 'three'
import { OrbitControls } from "@react-three/drei";
import Portfolio from "../Portfolio.js";

function Hero() {
  return (
    <Fragment>
      <div className="midnight h-20"></div>
      <Canvas camera={{ fov: 20, position: [0, 14, 39] }}>
        <directionalLight intensity={0.5} position={[0, 59, 0]} />
        <ambientLight intensity={0.2} />
        <spotLight intensity={0.2} position={[0, 17, 49]} />
        <Suspense fallback={null}>
          <Portfolio />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          maxAzimuthAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={-Math.PI / 4}
          minPolarAngle={0}
        />
      </Canvas>
    </Fragment>
  );
}

export default Hero;
