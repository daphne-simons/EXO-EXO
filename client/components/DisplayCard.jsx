import React from 'react'
// import data from '../../exoplanetsdata.json'
// import { Html } from '@react-three/drei'
import Typing from './Typing'
import planets from '../exoplanetsdata'

export default function DisplayCard({ planetId }, { name }) {
  console.log('id', planetId)
  let chosenPlanet = planets.find((planet) => planet.id === planetId)

  // Class names & Type speed:
  const title = `${name} title`
  const description = `${name} description`

  const speed = {
    slow: 200,
    med: 150,
    fast: 100,
    extraFast: 50,
    superFast: 30,
  }
  return (
    <div className="card earth">
      <div className="flexText">
        <h2 className={title}>
          <Typing
            line={`Name: ${chosenPlanet.name}`}
            typeSpeed={speed.extraFast}
          />
        </h2>
        <p className={description}>
          <Typing
            line={`Description: ${chosenPlanet.description}`}
            typeSpeed={speed.extraFast}
          />
          <p className={description}>
            <Typing
              line={`Distance from Earth: ${chosenPlanet.distanceFromEarth}`}
              typeSpeed={speed.fast}
            />
          </p>
          <p className={description}>
            <Typing
              line={`Temperature: ${chosenPlanet.temperature}`}
              typeSpeed={speed.fast}
            />
          </p>
        </p>
      </div>
    </div>
  )
}
