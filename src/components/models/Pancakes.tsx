import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane_1: THREE.Mesh
    Plane_2: THREE.Mesh
    Plane_3: THREE.Mesh
    Plane_4: THREE.Mesh
    Plane_5: THREE.Mesh
    Plane_6: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
    PaletteMaterial005: THREE.MeshPhysicalMaterial
    PaletteMaterial006: THREE.MeshStandardMaterial
  }
}


function Pancakes(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Hona/models/pancakes.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.028, 0]} scale={[2.093, 1.992, 2.093]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.PaletteMaterial002} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials.PaletteMaterial004} />
        <mesh geometry={nodes.Plane_5.geometry} material={materials.PaletteMaterial005} />
        <mesh geometry={nodes.Plane_6.geometry} material={materials.PaletteMaterial006} />
      </group>
    </group>
  )
}


export default Pancakes;
