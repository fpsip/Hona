import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { getModelComponent } from "./helpers";


const Model = () => {
  const { modelId } = useParams();
  const Model = getModelComponent(modelId);

  return (
    Model !== null
      ? (
        <Canvas
          style={{
            height: "100vh"
          }}
          camera={{
            fov: 90,
            position: [0, 0, 4]
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <OrbitControls />
          <Model />
        </Canvas>
      )
      : <div>Модель не найдена :C</div>
  );

}


export default Model;
