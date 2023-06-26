import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import {
  Bounds,
  ContactShadows,
  Html,
  OrbitControls,
  Stars,
  useBounds,
} from '@react-three/drei'
import Hud from './HUD/Hud'
import { Physics } from '@react-three/cannon'
import Earth from './planets/Earth'
import HD80606b from './planets/HD80606b'
import HD189733b from './planets/HD189733b'
import Kepler22B from './planets/Kepler22b'
import Upsilon from './planets/Upsilon'
import Cancri from './planets/Cancri'
import Music from './Sound'
import Typing from './Typing'

function MainView() {
  return (
    <>
      <Hud />
      {/* <Music /> */}
      <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
        <spotLight position={[10, 10, 10]} angle={0.3} />
        <OrbitControls
          enablePan={false}
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
          minDistance={3}
          autoRotate={true}
          autoRotateSpeed={0.3}
        />
        <Stars count={10000} fade={true} depth={0.2} speed={0.5} factor={6} />
        {/* <ambientLight intensity={10} /> */}
        <Suspense fallback={<Loader />}>
          {/* <Orbit position={[0, 0, -500]} /> */}
          <Bounds fit clip observe margin={1.2}>
            <SelectToZoom>
              <Physics>
                <Cancri
                  position={[1, 20, -10]}
                  args={[1.875, 32, 32]}
                  rotation={[4, 0, -0]}
                />
                <Earth
                  position={[0, 0, 0]}
                  rotation={[1, 1, -2]}
                  occlude={[false]}
                />
                <HD80606b
                  position={[20, 1, -10]}
                  args={[0.6, 32, 32]}
                  rotation={[1, 0, -1]}
                  occlude={[false]}
                />
                <HD189733b
                  position={[-20, 5, -1]}
                  args={[7, 32, 32]}
                  rotation={[2, 0, 1]}
                  occlude={[false]}
                />
                <Kepler22B
                  position={[18, 15, -25]}
                  args={[2.4, 32, 32]}
                  rotation={[1, 1, 0]}
                />
              </Physics>
            </SelectToZoom>
            <Upsilon
              position={[0, -60, -50]}
              args={[20, 32, 32]}
              rotation={[1, 0, 0]}
            />
          </Bounds>
          <ContactShadows
            rotateX={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={0.2}
            width={200}
            height={200}
            blur={1}
            far={50}
          />
        </Suspense>
      </Canvas>
    </>
  )
}

function SelectToZoom({ children }) {
  const api = useBounds()
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  )
}

function Loader() {
  return (
    <Html center>
      <p className="home-type">loading...</p>
    </Html>
  )
}

export default MainView
