import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Car = () => {
  const car = useGLTF("./car_demo/scene.gltf");

  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive object={car.scene} scale={2.5} position-y={0} rotation-y={0} />
    </mesh>
    
  );
};

const CarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 80,
        near: 0.1,
        far: 400,
        position: [-8, 6, 20],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CarCanvas;