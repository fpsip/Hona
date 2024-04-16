import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


type GLTFResult = GLTF & {
  nodes: {
    Cylinder_1: THREE.Mesh
    Cylinder_2: THREE.Mesh
    Cylinder_3: THREE.Mesh
    Cylinder_4: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshPhysicalMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

function Jelly(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Hona/models/jelly.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.069, 1.421, 0.034]} scale={[0.814, 0.952, 0.814]}>
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cylinder_3.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cylinder_4.geometry} material={materials.Material} />
      </group>
    </group>
  )
}


export default Jelly;
