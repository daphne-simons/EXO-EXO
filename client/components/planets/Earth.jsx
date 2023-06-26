import React, { useRef, useState } from 'react'
import { Html } from '@react-three/drei'
// import exoplanetsdata from '../../exoplanetsdata.json'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import EarthMap from '../../../server/public/textures/EarthHD.webp'
import { useFrame, useLoader } from '@react-three/fiber'
import Typing from '../Typing'

export default function Earth({ position, args }) {
  const colorMap = useLoader(TextureLoader, EarthMap)
  const earthRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
  })

  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5} position={[0, 1.8, 0]}>
          <div className="card earth">
            <div className="flexText">
              <h2 className="earth-title">
                <Typing line={'Name: Earth'} typeSpeed={50} />
              </h2>
              <p className="earth-description">
                <Typing
                  line={
                    'Description: Home planet. Contains liquid water. Diverse life forms.'
                  }
                  typeSpeed={100}
                />
                <p className="earth-description">
                  <Typing
                    line={'Distance from Earth: 0 light-years.'}
                    typeSpeed={150}
                  />
                </p>
                <p className="earth-description">
                  <Typing
                    line={'Temperature: −89.2 - 56.7 °C'}
                    typeSpeed={220}
                  />
                </p>
              </p>
            </div>
          </div>
        </Html>
      )
  }
  return (
    <mesh
      ref={earthRef}
      position={position}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      {displayCard()}
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
