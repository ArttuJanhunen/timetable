import React from 'react'
import Leg from './Leg'
import timeService from '../services/time'
import tripService from '../services/trip'

const Itinerary = ({ result }) => {
  if (result.loading) {
    return <div className="loading">Loading...</div>
  }

  const { itineraries } = result.data.plan

  const timer = () => {
    setTimeout(() => {
      window.location.reload()
      timer()
    }, 60000)
  }

  return (
    <div className="container">
      {timer()}
      {itineraries.map((itinerary) => <div className="route-info">
        <div className="head">
          <h2>Kulkuyhteys välille Ruskeasanta, Vantaa - Eficode, Helsinki</h2>
          <p>Lähtö: {timeService.date(itinerary.startTime)}, perillä: {timeService.date(itinerary.endTime)}</p>
          <p>Kokonaiskävelymatka: {tripService.distance(itinerary.walkDistance)}km</p>
          <p>Matkan kesto: {timeService.time(itinerary.duration)}</p>
        </div>
        <div className="phases">
          {itinerary.legs.map((leg) => <Leg leg={leg} />)}
        </div>
      </div>)}
    </div>
  )
}

export default Itinerary
