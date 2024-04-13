import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


type GLTFResult = GLTF & {
  nodes: {
    Sphere002_1: THREE.Mesh
    Sphere002_2: THREE.Mesh
    Sphere002_3: THREE.Mesh
    Sphere002_4: THREE.Mesh
    Sphere002_5: THREE.Mesh
    Sphere002_6: THREE.Mesh
    Sphere002_7: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
    PaletteMaterial005: THREE.MeshStandardMaterial
    PaletteMaterial006: THREE.MeshStandardMaterial
  }
}

function Dumplings(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/gallery/models/dumplings.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.066, 2.613, 0.036]}>
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.Sphere002_2.geometry} material={nodes.Sphere002_2.material} />
        <mesh geometry={nodes.Sphere002_3.geometry} material={materials.PaletteMaterial002} />
        <mesh geometry={nodes.Sphere002_4.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Sphere002_5.geometry} material={materials.PaletteMaterial004} />
        <mesh geometry={nodes.Sphere002_6.geometry} material={materials.PaletteMaterial005} />
        <mesh geometry={nodes.Sphere002_7.geometry} material={materials.PaletteMaterial006} />
      </group>
    </group>
  )
}


export default Dumplings;
