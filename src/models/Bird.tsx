import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'

export const Bird = ({ isRotating }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene)
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play()
    } else {
      actions["Take 001"]?.stop()
    }
  }, [actions, isRotating])

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  )
}