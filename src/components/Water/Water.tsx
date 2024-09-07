import { useRef } from 'react'
import { useFrame, extend, ReactThreeFiber } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { Color } from 'three'
// import { GUI } from 'lil-gui'
import waterFragmentShader from '../../assets/shaders/water/fragment.glsl?raw'
import waterVertexShader from '../../assets/shaders/water/vertex.glsl?raw'
import * as THREE from 'three'

const WaterMaterial = shaderMaterial(
  {
    uTime: 0,
    uBigWavesElevation: 0.2,
    uBigWavesFrequency: new THREE.Vector2(4, 1.5),
    uBigWavesSpeed: 0.1,
    uSmallWavesElevation: 0.15,
    uSmallWavesFrequency: 3,
    uSmallWavesSpeed: 0.1,
    uSmallWavesIterations: 3,
    uDepthColor: new Color('#343a40'),
    uSurfaceColor: new Color('#495057'),
    uColorOffset: 0.08,
    uColorMultiplier: 5,
    wireframe: true,
    side: THREE.DoubleSide,
  },
  waterVertexShader,
  waterFragmentShader
)

// Make shader material available in JSX
extend({ WaterMaterial });

/**
 * Global declaration to let TypeScript know about waterMaterial.
 * You can place this in the same file or a separate *.d.ts file.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      waterMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof WaterMaterial>;
    }
  }
}

const Water = () => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  // Update the time in the shader on each frame
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  // useEffect(() => {
  //   // Debug GUI setup
  //   const gui = new GUI({ width: 340 })
  //   const debugObject = {
  //     depthColor: '#186691',
  //     surfaceColor: '#9bd8ff',
  //   }

  //   gui.add(materialRef.current, 'uBigWavesElevation').min(0).max(1).step(0.001).name('wavesElevation')
  //   gui.add(materialRef.current.uniforms.uBigWavesFrequency.value, 'x').min(0).max(10).step(0.001).name('wavesFrequencyX')
  //   gui.add(materialRef.current.uniforms.uBigWavesFrequency.value, 'y').min(0).max(10).step(0.001).name('wavesFrequencyY')
  //   gui.add(materialRef.current, 'uBigWavesSpeed').min(0).max(4).step(0.001).name('wavesSpeed')
  //   gui.addColor(debugObject, 'depthColor').onChange(() => {
  //     materialRef.current.uniforms.uDepthColor.value.set(debugObject.depthColor)
  //   })
  //   gui.addColor(debugObject, 'surfaceColor').onChange(() => {
  //     materialRef.current.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor)
  //   })
  //   gui.add(materialRef.current, 'uColorOffset').min(0).max(0.1).step(0.001).name('colorOffset')
  //   gui.add(materialRef.current, 'uColorMultiplier').min(0).max(10).step(0.001).name('colorMultiplier')
  //   gui.add(materialRef.current, 'uSmallWavesElevation').min(0).max(1).step(0.001).name('smallWavesElevation')
  //   gui.add(materialRef.current, 'uSmallWavesFrequency').min(0).max(30).step(0.001).name('smallWavesFrequency')
  //   gui.add(materialRef.current, 'uSmallWavesSpeed').min(0).max(4).step(0.001).name('smallWavesSpeed')
  //   gui.add(materialRef.current, 'uSmallWavesIterations').min(0).max(5).step(1).name('smallWavesIterations')

  //   return () => {
  //     gui.destroy()
  //   }
  // }, [])

  return (
    <mesh ref={meshRef} rotation-x={Math.PI * 0.5}>
      <planeGeometry args={[6, 6, 512, 512]} />
      <waterMaterial ref={materialRef} attach="material" />
    </mesh>
  )
}

export default Water;