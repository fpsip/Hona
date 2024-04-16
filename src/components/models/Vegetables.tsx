import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


type GLTFResult = GLTF & {
  nodes: {
    Circle_1: THREE.Mesh
    Circle_2: THREE.Mesh
    Circle_3: THREE.Mesh
    Circle_4: THREE.Mesh
    Circle_5: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshPhysicalMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
    PaletteMaterial005: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
  }
}

function Vegetables(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Hona/models/vegetables.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.044, 0]}>
        <mesh geometry={nodes.Circle_1.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.Circle_2.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Circle_3.geometry} material={materials.PaletteMaterial004} />
        <mesh geometry={nodes.Circle_4.geometry} material={materials.PaletteMaterial005} />
        <mesh geometry={nodes.Circle_5.geometry} material={materials.PaletteMaterial002} />
      </group>
    </group>
  )
}


export default Vegetables;
