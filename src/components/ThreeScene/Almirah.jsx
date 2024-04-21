import React, { useRef } from 'react'
import { MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

export const Almirah = (props) => {
  const { nodes, materials } = useGLTF('models/Almirah.glb')
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const matcap = useTexture('/textures/matcap_2.png')
  const metallic = useTexture('/textures/metallic.png')
  const mirror_cap = useTexture('/textures/mirror.png')

  const ref = useRef()
  const body = useRef()
  const doorLeft = useRef()
  const doorRight = useRef()

  useFrame(() => {
    if ( hovered || clicked) {
      doorLeft.current.rotation.z = Math.max(doorLeft.current.rotation.z - 0.1, -Math.PI / 2)
      doorRight.current.rotation.z = Math.max(doorLeft.current.rotation.z - 0.1, -Math.PI / 2)
    } else {
      doorLeft.current.rotation.z = Math.min(doorLeft.current.rotation.z + 0.1, 0)
      doorRight.current.rotation.z = Math.min(doorLeft.current.rotation.z + 0.1, 0)
    }
  })

  useFrame(() => {
    if(clicked === true) {
      body.current.rotation.y += 0.02

    } else if (body.current.rotation.y !== 0) {
      body.current.rotation.y -= 0.05;

      if (body.current.rotation.y < 0) {
        body.current.rotation.y = 0;
      }
    }
  })

  useEffect(() => {
    // Calculate bounding box
    const box = new THREE.Box3().setFromObject(ref.current)

    // Calculate center point
    const center = box.getCenter(new THREE.Vector3())

    // Reposition the model to its center
    ref.current.position.sub(center)
  }, [])

  return (
    <>
    <group {...props} dispose={null} scale={[0.6, 0.6, 0.6]} ref={ref} rotation={[0, 0.6, 0]} onPointerDown={() => setClicked(true)} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} >
      <mesh name="Body" ref={body} rotation={[0, 0, 0]} onPointerDown={() => setClicked(true)} onPointerUp={() => setClicked(false)} geometry={nodes.Body.geometry} material={materials['Rough Metal 2']} position={[0.046, 3.49, -10.075]} scale={[1.987, 3.179, 1.228]} castShadow receiveShadow>
        <meshMatcapMaterial side={THREE.DoubleSide} matcap={metallic} color={'#ffffff'} />
        <mesh name="Door-Left" geometry={nodes['Door-Left'].geometry}  position={[-0.928, 0.050, 0.964]} rotation={[-1.571, 0.007, -0.016]} scale={[-0.460, -0.814, -0.895]} ref={doorLeft}> {/* rotation z-180 */ } 
          <meshMatcapMaterial matcap={matcap} color={'red'} />
          <group name="mirror" position={[-0.987, 0.039, -0.081]} rotation={[1.571, 0.015, -3.14]} scale={[0.619, 0.766, 0.044]}>
            <mesh name="mirror-plane" geometry={nodes['mirror-plane'].geometry} material={materials['Rough Metal 2']}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
            <mesh name="mirror-plane_1" material={materials.Mirror} geometry={nodes['mirror-plane_1'].geometry}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
          </group>
        </mesh>
        <mesh name="Door-Right" geometry={nodes['Door-Right'].geometry} position={[0.930, 0.052, 0.993]} rotation={[1.571, 0.007, -0.016]} scale={[0.480, 0.814, 0.887]} ref={doorRight}> {/* rotation z -0.016 memory */} 
          <meshMatcapMaterial matcap={matcap} color={'red'} />
          <mesh name="Handle" geometry={nodes.Handle.geometry} material={materials['Rough Metal 2.005']} position={[-1.553, 0.038, 0.024]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.212, 0.016, 0.028]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
          <mesh name="Handle_Base" geometry={nodes.Handle_Base.geometry} material={materials['Rough Metal 2.002']} position={[-1.731, -0.038, 0.024]} scale={[0.283, 0.267, 0.093]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
          <mesh name="Handle_Hinge" geometry={nodes.Handle_Hinge.geometry} material={materials['Rough Metal.004']} position={[-1.741, 0.038, 0.024]} rotation={[-Math.PI, 0, 0]} scale={[0.771, 0.334, 0.254]}> <meshMatcapMaterial matcap={mirror_cap} color={'red'} /> </mesh>
          <mesh name="Keyhole_container" geometry={nodes.Keyhole_container.geometry} material={materials['Rough Metal 2.004']} position={[-1.731, -0.012, 0.081]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.149, 0.077, 0.023]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
        </mesh>
        <mesh name="Drawer" geometry={nodes.Drawer.geometry} material={materials['Rough Metal']} position={[-0.560, 0.233, 0.648]} rotation={[Math.PI / 2, 0, 0]} scale={[0.450, 0.814, 0.106]}>
          <meshMatcapMaterial matcap={matcap} color={'red'} />
          <mesh name="keyhole-base" geometry={nodes['keyhole-base'].geometry} material={materials['Rough Metal 2.002']} position={[-0.026, 0, -0.25]} scale={[0.268, 0.218, 0.647]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
          <mesh name="keyhole-lock" geometry={nodes['keyhole-lock'].geometry} material={materials['Rough Metal 2.006']} position={[-0.025, 0.02, 0.167]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.138, 0.47, 0.021]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
          <mesh name="Pull_Handle" geometry={nodes.Pull_Handle.geometry} material={materials['Rough Metal 2.001']} position={[-0.027, 0.131, -0.781]} rotation={[1.492, 1.48, 1.632]} scale={[-0.041, -0.006, -0.294]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
        </mesh>
        <mesh name="Drawer_Plane" geometry={nodes.Drawer_Plane.geometry} material={materials['Rough Metal 2']} position={[-0.560, 0.340, -0.174]} scale={[0.430, 0.315, 0.821]}> <meshMatcapMaterial matcap={mirror_cap} color={'#ffffff'} /> </mesh>
        <mesh name="locker_drawer_plane" geometry={nodes.locker_drawer_plane.geometry} material={materials['Rough Metal 2']} position={[-0.027, 0.127, -0.147]} rotation={[0, 0, Math.PI]} scale={[-0.963, -0.315, -0.837]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
         <mesh name="Locker_Plane_Face" geometry={nodes.Locker_Plane_Face.geometry} material={materials['Rough Metal.003']} position={[0.404, 0.347, 0.65]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.531, -0.814, -0.219]}>
         <meshMatcapMaterial matcap={matcap} color={'red'} />
          <mesh name="Gear_Handle" geometry={nodes.Gear_Handle.geometry} material={materials['Rough Metal 2.007']} position={[0.78, 0.066, -0.077]} rotation={[Math.PI, 0, 0]} scale={[-1.651, -0.295, -2.469]}>
            <meshMatcapMaterial matcap={mirror_cap} />
            <mesh name="gear-cylinder-down" geometry={nodes['gear-cylinder-down'].geometry} material={materials['Rough Metal 2.008']} position={[0, -0.016, 0.053]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.106, 0.116, 0.62]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
            <mesh name="gear-cylinder-left" geometry={nodes['gear-cylinder-left'].geometry} material={materials['Rough Metal 2.008']} position={[-0.053, -0.006, -0.002]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.106, 0.116, 0.62]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
            <mesh name="gear-cylinder-right" geometry={nodes['gear-cylinder-right'].geometry} material={materials['Rough Metal 2.008']} position={[0.052, -0.013, -0.005]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.106, 0.116, 0.62]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
            <mesh name="gear-cylinder-up" geometry={nodes['gear-cylinder-up'].geometry} material={materials['Rough Metal 2.008']} position={[-0.001, 0.002, -0.053]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.106, 0.116, 0.62]}> <meshMatcapMaterial matcap={mirror_cap} /> </mesh>
          </mesh>
          <mesh name="Gear_Hinge" geometry={nodes.Gear_Hinge.geometry} material={materials['Rough Metal 2']} position={[0.781, 0.022, -0.078]} rotation={[Math.PI, 0, 0]} scale={[0.372, 0.235, 0.556]} />
         </mesh>
        <mesh name="Locker_Plane_Up" geometry={nodes.Locker_Plane_Up.geometry} material={materials['Rough Metal 2']} position={[0.419, 0.570, -0.178]} scale={[0.537, 0.315, 0.821]}> <meshMatcapMaterial matcap={mirror_cap} color={'#ffffff'} /> </mesh>
        <mesh name="Rack_1" geometry={nodes.Rack_1.geometry} material={materials['Rough Metal.002']} position={[0.055, -0.633, -0.063]} scale={[0.9, 0.315, 0.814]}> <meshMatcapMaterial matcap={matcap} color={'red'} /> </mesh>
        <mesh name="Rack_2" geometry={nodes.Rack_2.geometry} material={materials['Rough Metal.001']} position={[0.055, -0.221, -0.046]} scale={[0.902, 0.315, 0.814]}> <meshMatcapMaterial matcap={matcap} color={'red'} /> </mesh>
        <mesh name="Separator" geometry={nodes.Separator.geometry} material={materials['Rough Metal 2']} position={[-0.121, 0.569, -0.145]} rotation={[0, 0, Math.PI / 2]} scale={[-0.429, -0.503, -0.823]}/>
        
        <group>
        <mesh position={[-0.95, -1.065, -0.020]}  scale={[0.1, 0.15, 1.93]}>
        <meshMatcapMaterial matcap={metallic} color={'#ffffff'} />
        <boxGeometry />
        </mesh>

        <mesh position={[0.95, -1.065, -0.020]}  scale={[0.1, 0.15, 1.93]}>
        <meshMatcapMaterial matcap={metallic} color={'#ffffff'} />
        <boxGeometry />
        </mesh>
        </group>
      </mesh>
    </group>
     <mesh position={[0, -1.95, -5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry
       args={[100, 100, 100]}
      />

     <MeshReflectorMaterial
      blur={[0, 0]} 
      mixBlur={2} 
      mixStrength={0.2} 
      mixContrast={1} 
      resolution={1024} 
      mirror={1} 
      depthScale={0} 
      minDepthThreshold={0.9} 
      maxDepthThreshold={1} 
      depthToBlurRatioBias={0.5}
      distortion={1}
     />
     </mesh>
   </>
  )
}

useGLTF.preload('models/Almirah.glb')
