import { Environment, PresentationControls, useGLTF } from "@react-three/drei";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Loader from "../CanvasLoader";
import { styles } from "../../../utils/styles";

const Earth = () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco-gltf/");
  const model = useGLTF("/earth.glb", dracoLoader);

  return (
    <>
      <Environment preset="warehouse" />

      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive
          object={model.scene}
          // position-y={-1.2}
          scale={5}
          position-y={0}
          rotation-y={0}
        />
      </PresentationControls>
    </>
  );
};

const EarthCanvas = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-around content-center ${styles.paddingX}`}
    >
      <motion.div className="w-full items-basis flex  h-fit  flex-col pt-10">
        <h1 className=" text-white  py-10 text-5xl  font-extrabold sm:text-7xl font-BebasNeue text-center tracking-wider">
          SECURITY CAMERA VENDOR
        </h1>
        <p
          className="text-base text-indigo-100 md:text-lg text-center"
          style={{ textShadow: "6px 4px 5px #000000", lineHeight: 2 }}
        >
          It&apos;s not every day that you find a group like us _ a direct
          dealer of security cameras with a business to business model,
          supporting all scopes of orders through the whole continent, dealing
          with installers, integrators, and wholesalers.
        </p>
      </motion.div>
      <div className="w-full ">
        <Canvas
          shadows
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true }}
          camera={{ fov: 15, near: 0.1, far: 200, position: [-4, 7, 6] }}
          style={{ height: "350px" }}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
            <Environment preset="dawn" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};
export default EarthCanvas;
