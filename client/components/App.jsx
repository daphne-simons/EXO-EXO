import React, { Suspense, useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Orbit from './Orbit'

import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Stars,
  Bounds,
  useBounds,
  Html,
} from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Earth from './Earth'
import HD80606b from './HD80606b'
import HD189733b from './HD189733b'
import Kepler22B from './Kepler22b'
import Upsilon from './Upsilon'
import Cancri from './Cancri'

import Planet1 from './Planet1'
import Planet2 from './Planet2'
import Planet3 from './Planet3'
import Planet4 from './Planet4'
import Planet5 from './Planet5'
import Planet6 from './Planet6'
import Planet7 from './Planet7'
import Planet8 from './Planet8'
import Planet9 from './Planet9'
import Planet10 from './Planet10'
import Planet11 from './Planet11'
import Planet12 from './Planet12'

function App() {
  return (
    // <Canvas camera={{ position: [0, 0, 0], fov: 30 }} dpr={[1, 2]}>
    <Canvas camera={{ position: [0, 20, 25], fov: 45 }} dpr={[1, 2]}>
      <Orbit />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <OrbitControls
        enablePan={false}
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
      <Stars
        radius={500} // Radius of the inner sphere (default=100)
        depth={30} // Depth of area where stars should fit (default=50)
        count={10000} // Amount of stars (default=5000)
        factor={5} // Size factor (default=4)
        saturation={0.7} // Saturation 0-1 (default=0)
        fade
      />
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <SelectToZoom>
            <Physics>
              <Cancri
                position={[-20, -11, -80]}
                args={[1.875, 32, 32]}
                rotation={[4, 0, -0]}
              />
              <Earth position={[0, 0, 0]} rotation={[1, 1, -2]} />
              <HD80606b
                position={[0, 5, 0]}
                args={[0.3, 32, 32]}
                rotation={[1, 0, -1]}
              />
              <HD189733b
                position={[0, -15, -80]}
                args={[7, 32, 32]}
                rotation={[2, 0, 1]}
              />
              <Kepler22B
                position={[0, -23, 160]}
                args={[2.4, 82, 32]}
                rotation={[1, 1, 0]}
              />
              <Upsilon
                position={[0, -45, 0]}
                args={[8, 32, 32]}
                rotation={[1, 0, 0]}
              />

              <Planet1 position={[64, -15, -236]} args={[0.8, 32, 32]} />
              <Planet2 position={[7, -60, 150]} args={[1.2, 32, 32]} />
              <Planet3 position={[-37, -85, 108]} args={[1.7, 32, 32]} />
              <Planet4 position={[7, -125, 328]} args={[6, 32, 32]} />
              <Planet5 position={[-55, -17, -6]} args={[3.1, 32, 32]} />
              <Planet6 position={[-13, 59, -230]} args={[2.0, 32, 32]} />
              <Planet7 position={[20, 2, -120]} args={[1.7, 32, 32]} />
              <Planet8 position={[118, 92, -129]} args={[1.9, 32, 32]} />
              <Planet9 position={[-20, 104, 98]} args={[1.4, 32, 32]} />
              <Planet10 position={[1, -50, -26]} args={[2.1, 32, 32]} />
              <Planet11 position={[-28, -15, 28]} args={[3.7, 32, 32]} />
              <Planet12 position={[-20, 10, 90]} args={[1.8, 32, 32]} />
            </Physics>
          </SelectToZoom>
        </Bounds>
      </Suspense>
    </Canvas>
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

export default App
