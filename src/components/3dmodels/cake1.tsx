import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRef } from 'react'
import { useFrame} from "@react-three/fiber";
type GLTFResult = GLTF & {
  nodes: {
      Mesh_slice_1:THREE.Mesh
      Mesh_slice:THREE.Mesh
    Mesh_slice_2:THREE.Mesh
    Mesh_slice_3:THREE.Mesh
    Mesh_slice_4:THREE.Mesh
    Mesh_slice_5:THREE.Mesh
 
  }
}

 function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cake1.gltf') as GLTFResult
    const group = useRef<THREE.Group<THREE.Object3DEventMap>>();
  useFrame((_, delta) => {
    // group.current.rotation.x += 1 * delta
    group.current!.rotation.y += 0.8 * delta
    if(delta<0.5){
      group.current!.rotation.x += 0.8 * delta

    }
  })
  return (
    <group {...props} position={[0, -0.75, 0]} ref={group} dispose={null}  >

      <group
        position={[0.14, 0, 0.24]}
        rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
      >
        <mesh
          geometry={nodes.Mesh_slice.geometry}
          material={nodes.Mesh_slice.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_1.geometry}
          material={nodes.Mesh_slice_1.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_2.geometry}
          material={nodes.Mesh_slice_2.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_3.geometry}
          material={nodes.Mesh_slice_3.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_4.geometry}
          material={nodes.Mesh_slice_4.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_5.geometry}
          material={nodes.Mesh_slice_5.material}
        />
      </group>
      <group position={[-0.14, 0, -0.24]} rotation={[0, -Math.PI / 3, 0]}>
        <mesh
          geometry={nodes.Mesh_slice.geometry}
          material={nodes.Mesh_slice.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_1.geometry}
          material={nodes.Mesh_slice_1.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_2.geometry}
          material={nodes.Mesh_slice_2.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_3.geometry}
          material={nodes.Mesh_slice_3.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_4.geometry}
          material={nodes.Mesh_slice_4.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_5.geometry}
          material={nodes.Mesh_slice_5.material}
        />
      </group>
      <group position={[-0.28, 0, 0]}>
        <mesh
          geometry={nodes.Mesh_slice.geometry}
          material={nodes.Mesh_slice.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_1.geometry}
          material={nodes.Mesh_slice_1.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_2.geometry}
          material={nodes.Mesh_slice_2.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_3.geometry}
          material={nodes.Mesh_slice_3.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_4.geometry}
          material={nodes.Mesh_slice_4.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_5.geometry}
          material={nodes.Mesh_slice_5.material}
        />
      </group>
      <group
        position={[0.14, 0, -0.24]}
        rotation={[Math.PI, -Math.PI / 3, Math.PI]}
      >
        <mesh
          geometry={nodes.Mesh_slice.geometry}
          material={nodes.Mesh_slice.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_1.geometry}
          material={nodes.Mesh_slice_1.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_2.geometry}
          material={nodes.Mesh_slice_2.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_3.geometry}
          material={nodes.Mesh_slice_3.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_4.geometry}
          material={nodes.Mesh_slice_4.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_5.geometry}
          material={nodes.Mesh_slice_5.material}
        />
      </group>
      <group position={[0.28, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          geometry={nodes.Mesh_slice.geometry}
          material={nodes.Mesh_slice.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_1.geometry}
          material={nodes.Mesh_slice_1.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_2.geometry}
          material={nodes.Mesh_slice_2.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_3.geometry}
          material={nodes.Mesh_slice_3.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_4.geometry}
          material={nodes.Mesh_slice_4.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_5.geometry}
          material={nodes.Mesh_slice_5.material}
        />
      </group>
      <group position={[-0.14, 0, 0.24]} rotation={[0, Math.PI / 3, 0]}>
        <mesh
          geometry={nodes.Mesh_slice.geometry}
          material={nodes.Mesh_slice.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_1.geometry}
          material={nodes.Mesh_slice_1.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_2.geometry}
          material={nodes.Mesh_slice_2.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_3.geometry}
          material={nodes.Mesh_slice_3.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_4.geometry}
          material={nodes.Mesh_slice_4.material}
        />
        <mesh
          geometry={nodes.Mesh_slice_5.geometry}
          material={nodes.Mesh_slice_5.material}
        />
      </group>


    </group>
  )
}

useGLTF.preload('./cake1.gltf')



export default Model

