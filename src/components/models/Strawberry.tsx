import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';


type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
    Cube001_2: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    glass: THREE.MeshPhysicalMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
};

function Strawberry(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/gallery/models/strawberry.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.035, 0.711, -0.045]} scale={[0.642, 0.642, 0.64]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.glass} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
};


export default Strawberry;
