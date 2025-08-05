import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const TechIconCardExperience = ({ model }) => {
  // If it's not a .glb model, show image directly
  const isGLB = model.modelPath?.endsWith('.glb')

  const scene = isGLB ? useGLTF(model.modelPath) : null

  useEffect(() => {
    if (isGLB && model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' })
        }
      })
    }
  }, [scene, isGLB])

  if (!isGLB) {
    return (
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
        className="flex items-center justify-center w-full h-full p-2"
      >
        <img
          src={model.modelPath}
          alt={model.name}
          className="w-full h-full object-contain"
        />
      </motion.div>
    )
  }

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default TechIconCardExperience
