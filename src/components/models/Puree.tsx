import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh
    Plane001_1: THREE.Mesh
    Plane001_2: THREE.Mesh
    Plane001_3: THREE.Mesh
    Plane001_4: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
    PaletteMaterial005: THREE.MeshStandardMaterial
  }
}

function Puree(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Hona/models/puree.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-0.001, 0.014, -0.192]} scale={[2.35, 2.237, 2.35]}>
        <mesh geometry={nodes.Plane001.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.Plane001_1.geometry} material={materials.PaletteMaterial002} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials.PaletteMaterial004} />
        <mesh geometry={nodes.Plane001_4.geometry} material={materials.PaletteMaterial005} />
      </group>
    </group>
  )
}


export default Puree;
