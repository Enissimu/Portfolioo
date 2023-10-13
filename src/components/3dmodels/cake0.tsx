import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRef } from 'react'
import { useFrame} from "@react-three/fiber";
type GLTFResult = GLTF & {
  nodes: {
    Mesh_cuttingBoardRound: THREE.Mesh
    Mesh_cuttingBoardRound_1:THREE.Mesh
  }
  materials: {
    brownLight:THREE.Material
brown:THREE.Material
  }
}

 function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cake0.gltf') as GLTFResult
    const group = useRef<THREE.Group>();
  useFrame((_, delta) => {
    // group.current.rotation.x += 1 * delta
    group.current!.rotation.y += 0.8 * delta
    if(delta<0.5){
      group.current!.rotation.x += 0.8 * delta

    }
  })
  return (
    <group {...props} dispose={null}>

    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_cuttingBoardRound.geometry}
        material={materials.brownLight}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_cuttingBoardRound_1.geometry}
        material={materials.brown}
      />

    </group>
  )
}

useGLTF.preload('./cake0.gltf')



export default Model

