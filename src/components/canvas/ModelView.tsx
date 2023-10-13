import { Canvas } from "@react-three/fiber";
import Cake0 from "../3dmodels/cake0"
import { Environment,Stats } from "@react-three/drei";


const ModelView=({views}:{views: Set<string>})=>


{   console.log(views)


    return <Canvas
        className="canvas"
    
      camera={{ position: [0, 1, 5] }} 
          
    >
<Cake0 position={[0,0,5]}  scale={5}></Cake0>

      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
      />
      <Environment preset="city" />
      <Stats />

    </Canvas>
}

export default ModelView