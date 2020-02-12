import React from 'react'
import Leg from './Leg'
import timeService from '../services/time'
import tripService from '../services/trip'

const Route = ({ result }) => {
  if (result.loading) {
    return <div className="loading">Loading...</div>
  }

  const routes = result.data.plan.itineraries

  const timer = () => {
    setTimeout(() => {
      window.location.reload()
      timer()
    }, 60000)
  }

  return (
    <div className="container">
      {timer()}
      {routes.map(route =>
        <div className="route-info">
          <div className="head">
            <h2>Kulkuyhteys välille Ruskeasanta, Vantaa - Eficode, Helsinki</h2>
            <p>Lähtö: {timeService.date(route.startTime)}, perillä: {timeService.date(route.endTime)}</p>
            <p>Kokonaiskävelymatka: {tripService.distance(route.walkDistance)}km</p>
            <p>Matkan kesto: {timeService.time(route.duration)}</p>
          </div>
          <div className="phases">
            {route.legs.map(leg =>
              <Leg leg={leg} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Route