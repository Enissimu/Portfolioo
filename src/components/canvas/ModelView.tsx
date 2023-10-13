import { Canvas } from "@react-three/fiber";
import Cake0 from "../3dmodels/cake0"
import { Environment,Stats } from "@react-three/drei";
import Cake1 from "../3dmodels/cake1"
import Cake2 from "../3dmodels/cake2"
import Cake3 from "../3dmodels/cake3"
const ModelView=({views}:{views: Set<string>})=>


{   console.log(views)


    return <Canvas
        className="canvas"
    
      camera={{ position: [0, 1, 5] }} 
          
    >
<Cake0  scale={2}></Cake0>
<Cake1 scale={2}></Cake1>
<Cake2 scale={2}></Cake2>
<Cake3 scale={2}></Cake3>
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