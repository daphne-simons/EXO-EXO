import React from 'react'
// import data from '../../exoplanetsdata.json'
// import { Html } from '@react-three/drei'
import Typing from './Typing'
import planets from '../exoplanetsdata'

export default function DisplayCard({ planetId }) {
  console.log('id', planetId)
  let chosenPlanet = planets.find((planet) => planet.id === planetId)

  return (
    <div className="card earth">
      <div className="flexText">
        <h2 className="earth-title">
          <Typing line={`Name: ${chosenPlanet.name}`} typeSpeed={50} />
        </h2>
        <p className="earth-description">
          <Typing
            line={`Description: ${chosenPlanet.description}`}
            typeSpeed={100}
          />
          <p className="earth-description">
            <Typing
              line={`Distance from Earth: ${chosenPlanet.distanceFromEarth}`}
              typeSpeed={150}
            />
          </p>
          <p className="earth-description">
            <Typing
              line={`Temperature: ${chosenPlanet.temperature}`}
              typeSpeed={220}
            />
          </p>
        </p>
      </div>
    </div>
  )
}
