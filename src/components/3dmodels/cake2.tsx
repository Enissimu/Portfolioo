import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRef } from 'react'
import { useFrame} from "@react-three/fiber";
type GLTFResult = GLTF & {
  nodes: {
Mesh_canSmall_1:THREE.Mesh
Mesh_canSmall:THREE.Mesh
Mesh_canSmall_2:THREE.Mesh

  }
  materials:{
    greyLight:THREE.Material
    greyDark:THREE.Material
    purple:THREE.Material

  }
}

 function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cake2.gltf') as GLTFResult
    const group = useRef<THREE.Group<THREE.Object3DEventMap>>();
  useFrame((_, delta) => {
    // group.current.rotation.x += 1 * delta
    group.current!.rotation.y += 0.8 * delta
    if(delta<0.5){
      group.current!.rotation.x += 0.8 * delta

    }
  })
  return (
    <group {...props} position={[0, -2, 0]} ref={group} dispose={null}  >


           <mesh
        geometry={nodes.Mesh_canSmall.geometry}
        material={materials.greyLight}
      />
      <mesh
        geometry={nodes.Mesh_canSmall_1.geometry}
        material={materials.purple}
      />
      <mesh
        geometry={nodes.Mesh_canSmall_2.geometry}
        material={materials.greyDark}
      />
    </group>
  )
}

useGLTF.preload('./cake2.gltf')



export default Model

