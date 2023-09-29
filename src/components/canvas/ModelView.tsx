import { Canvas } from "@react-three/fiber";


const ModelView=({views}:{views: React.RefObject<HTMLDivElement>[]})=>


{   console.log(views)


    return <Canvas
        className=""
    
      camera={{ position: [0, 1, 5] }} 
    
    >




    </Canvas>
}

export default ModelView