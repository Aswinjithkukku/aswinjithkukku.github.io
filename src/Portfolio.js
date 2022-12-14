import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/portfolio.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions);
    actions.action1.play()
    actions.action2.play()
    actions.action3.play()
    actions.action4.play()
    actions.action5.play()
    actions.action6.play()
    actions.action7.play()
    actions.action8.play()
    actions.action9.play()
    actions.action10.play()
    actions.action11.play()
    actions.action12.play()
    actions.action13.play()
    actions.action14.play()
    actions.mouseAction.play()
    actions.action18.play()
    actions.PlaneAction.play()
    actions.action18.play()
    actions.action19.play()
    actions.action20.play()
    actions.action21.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="monitor" geometry={nodes.monitor.geometry} material={materials['monitor.001']} position={[0, 3.9, 0.08]} />
        <mesh name="background" geometry={nodes.background.geometry} material={materials['Material.001']} scale={[182.46, 91.16, 80.63]} />
        <mesh name="hero" geometry={nodes.hero.geometry} material={materials.monitor} position={[0, 3.9, 0.08]} />
        <mesh name="stand" geometry={nodes.stand.geometry} material={materials['Material.022']} position={[0.02, 0.04, -0.61]} scale={[0.72, 1, 1]} />
        <mesh name="baseKeyboard" geometry={nodes.baseKeyboard.geometry} material={materials['Material.030']} position={[0.04, 0, 4.35]} />
        <mesh name="keys" geometry={nodes.keys.geometry} material={materials['Material.028']} position={[-2.56, 0.12, 5.04]} rotation={[0.05, 0, 0]} scale={[0.13, 0.06, 0.13]} />
        <mesh name="mouse" geometry={nodes.mouse.geometry} material={materials['Material.029']} position={[4.77, 0.19, 4.33]} rotation={[0, 0.33, 0]} scale={[0.38, 0.28, 0.64]} />
        <mesh name="nameDiv" geometry={nodes.nameDiv.geometry} material={materials.Material} position={[-1.23, 4.97, 0.93]} scale={0.84} />
        <mesh name="picDiv" geometry={nodes.picDiv.geometry} material={materials['Material.010']} position={[-2.01, 3.05, 0.87]} />
        <mesh name="textarea" geometry={nodes.textarea.geometry} material={materials['Material.002']} position={[2.71, 2.65, 0.89]} />
        <mesh name="picDiv001" geometry={nodes.picDiv001.geometry} material={materials['Material.055']} position={[-2.72, 3.65, 1.07]} rotation={[0, 0, 0.53]} scale={0.63} />
        <mesh name="picDiv002" geometry={nodes.picDiv002.geometry} material={materials['Material.008']} position={[-2, 2.97, 1.34]} scale={0.66} />
        <mesh name="picDiv003" geometry={nodes.picDiv003.geometry} material={materials['Material.009']} position={[-2.75, 3.7, 1.17]} rotation={[0, 0, 0.53]} scale={0.55} />
        <mesh name="picDiv004" geometry={nodes.picDiv004.geometry} material={materials['Material.007']} position={[-2, 2.97, 1.44]} scale={0.58} />
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.004']} position={[-1.81, 2.62, 1.53]} rotation={[Math.PI / 2, 0, 0]} scale={0.52} />
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.006']} position={[-2.3, 3.24, 1.58]} rotation={[Math.PI / 2, 0, 0]} scale={0.52} />
        <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials['Material.005']} position={[-2.13, 2.57, 1.58]} rotation={[Math.PI / 2, 0, 0]} scale={0.41} />
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Material.011']} position={[-3.3, 4.86, 1.06]} rotation={[Math.PI / 2, 0, 0]} scale={0.36} />
        <mesh name="nameDiv001" geometry={nodes.nameDiv001.geometry} material={materials['Material.003']} position={[2.74, 3.31, 1.19]} scale={0.69} />
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.012']} position={[3.27, 2.67, 1.11]} />
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.013']} position={[3.27, 2.26, 1.11]} />
        <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.014']} position={[3.27, 1.83, 1.11]} />
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.036']} position={[2.74, 5.3, 0.74]} scale={0.12} />
        <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Material.034']} position={[3.13, 5.3, 0.74]} scale={0.14} />
        <mesh name="Sphere002" geometry={nodes.Sphere002.geometry} material={materials['Material.032']} position={[3.52, 5.3, 0.74]} scale={0.16} />
        <mesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={materials['Material.035']} position={[-2.58, 6.12, 0.67]} scale={0.14} />
        <mesh name="Sphere004" geometry={nodes.Sphere004.geometry} material={materials['Material.033']} position={[-3.06, 6.12, 0.67]} scale={0.16} />
        <mesh name="Sphere005" geometry={nodes.Sphere005.geometry} material={materials['Material.031']} position={[-3.6, 6.12, 0.67]} scale={0.19} />
        <mesh name="textarea001" geometry={nodes.textarea001.geometry} material={materials['Material.024']} position={[-6.4, 4.14, 0.89]} scale={0.47} />
        <mesh name="textarea002" geometry={nodes.textarea002.geometry} material={materials['Material.027']} position={[5.91, 5.09, 0.89]} scale={0.47} />
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.026']} position={[5.88, 5.07, 1.04]} rotation={[Math.PI / 2, 0, 0]} scale={1.01} />
        <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials['Material.054']} position={[5.88, 5.09, 1.12]} rotation={[1.57, -1.56, 0]} scale={0.28} />
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials['Material.019']} position={[-5.75, 0.05, 1.94]} rotation={[Math.PI / 2, 0, 0]} scale={1.46} />
        <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials['Material.016']} position={[-4.77, 2.24, 1.68]} rotation={[Math.PI / 2, 0, 0]} scale={1.63} />
        <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.047']} position={[-4.75, 0.96, 1.76]} scale={[0.73, 1, 1]} />
        <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.048']} position={[-4.97, 1.91, 1.8]} />
        <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.046']} position={[-4.53, 2.21, 1.8]} rotation={[0, 0, -1.88]} />
        <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['Material.045']} position={[-4.9, 2.19, 1.8]} rotation={[0, 0, -0.31]} />
        <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials['Material.018']} position={[-5.74, 2.23, -0.56]} rotation={[Math.PI / 2, 0, 0]} scale={1.49} />
        <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['Material.049']} position={[-5.73, 1.26, -0.48]} scale={[0.92, 1.27, 1.27]} />
        <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={materials['Material.051']} position={[-5.41, 2.56, -0.43]} rotation={[0, 0, -1.88]} scale={1.48} />
        <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials['Material.050']} position={[-6.03, 2.88, -0.43]} scale={1.37} />
        <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials['Material.052']} position={[-6.02, 2.31, -0.44]} scale={1.25} />
        <mesh name="textarea003" geometry={nodes.textarea003.geometry} material={materials['Material.025']} position={[-6.4, 4.14, 1.03]} scale={0.39} />
        <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials['Material.023']} position={[-6.42, 4.12, 1.15]} rotation={[Math.PI / 2, 0, 0]} scale={0.9} />
        <mesh name="Text001" geometry={nodes.Text001.geometry} material={materials['Material.053']} position={[-6.51, 3.86, 1.21]} rotation={[Math.PI / 2, 0, 0]} scale={0.73} />
        <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials['Material.015']} position={[4.97, 2.26, 2.19]} rotation={[Math.PI / 2, 0, 0]} scale={1.63} />
        <mesh name="Plane011" geometry={nodes.Plane011.geometry} material={materials['Material.037']} position={[4.99, 0.98, 2.27]} scale={[0.73, 1, 1]} />
        <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials['Material.040']} position={[4.77, 1.93, 2.32]} />
        <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials['Material.038']} position={[5.21, 2.23, 2.32]} rotation={[0, 0, -1.88]} />
        <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials['Material.039']} position={[4.83, 2.21, 2.32]} rotation={[0, 0, -0.31]} />
        <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={materials['Material.020']} position={[4.92, -0.22, 2.47]} rotation={[Math.PI / 2, 0, 0]} scale={1.84} />
        <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials['Material.017']} position={[5.73, 2.94, 0.59]} rotation={[Math.PI / 2, 0, 0]} scale={[1.79, 1.49, 1.79]} />
        <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials['Material.021']} position={[6.13, 0.15, 0.95]} rotation={[Math.PI / 2, 0, 0]} scale={1.84} />
        <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials['Material.041']} position={[5.8, 1.5, 0.68]} scale={[0.78, 1.07, 1.07]} />
        <mesh name="Plane016" geometry={nodes.Plane016.geometry} material={materials['Material.042']} position={[6.08, 2.6, 0.73]} rotation={[0, 0, -1.88]} scale={1.25} />
        <mesh name="Plane017" geometry={nodes.Plane017.geometry} material={materials['Material.043']} position={[5.55, 2.87, 0.73]} scale={1.16} />
        <mesh name="Plane018" geometry={nodes.Plane018.geometry} material={materials['Material.044']} position={[5.56, 2.39, 0.72]} scale={1.06} />
      </group>
    </group>
  )
}

useGLTF.preload('/portfolio.glb')
