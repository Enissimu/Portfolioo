import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRef } from 'react'
import { useFrame} from "@react-three/fiber";
type GLTFResult = GLTF & {
  nodes: {
Mesh_wedge:THREE.Mesh
Mesh_wedge_1:THREE.Mesh

Mesh_wedge_2:THREE.Mesh
Mesh_wedge_3:THREE.Mesh
Mesh_wedge_4:THREE.Mesh
Mesh_wedge_5:THREE.Mesh
Mesh_wedge_6:THREE.Mesh
Mesh_wedge_7:THREE.Mesh
Mesh_wedge_8:THREE.Mesh

}}

 function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cake3.gltf') as GLTFResult
    const group = useRef<THREE.Group<THREE.Object3DEventMap>>();
  useFrame((_, delta) => {
    // group.current.rotation.x += 1 * delta
    group.current!.rotation.y += 0.8 * delta
    if(delta<0.5){
      group.current!.rotation.x += 0.8 * delta

    }
  })
  return (
    <group {...props} position={[0, -5, 0]} ref={group} dispose={null}  >


         <group rotation={[0, Math.PI / 6, 0]}>
        <mesh
          geometry={nodes.Mesh_wedge.geometry}
          material={nodes.Mesh_wedge.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_1.geometry}
          material={nodes.Mesh_wedge_1.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_2.geometry}
          material={nodes.Mesh_wedge_2.material}
        />
      </group>
      <group rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[Math.PI, -Math.PI / 6, Math.PI]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[0, Math.PI / 3, 0]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[0, -Math.PI / 6, 0]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[0, -Math.PI / 3, 0]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <group rotation={[-Math.PI, Math.PI / 6, -Math.PI]}>
        <mesh
          geometry={nodes.Mesh_wedge_3.geometry}
          material={nodes.Mesh_wedge_3.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_4.geometry}
          material={nodes.Mesh_wedge_4.material}
        />
        <mesh
          geometry={nodes.Mesh_wedge_5.geometry}
          material={nodes.Mesh_wedge_5.material}
        />
      </group>
      <mesh
        geometry={nodes.Mesh_wedge_6.geometry}
        material={nodes.Mesh_wedge_6.material}
      />
      <mesh
        geometry={nodes.Mesh_wedge_7.geometry}
        material={nodes.Mesh_wedge_7.material}
      />
      <mesh
        geometry={nodes.Mesh_wedge_8.geometry}
        material={nodes.Mesh_wedge_8.material}
      />
    </group>
  )
}

useGLTF.preload('./cake3.gltf')



export default Model

