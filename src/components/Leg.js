import React from 'react'
import emojiDisplayer from '../services/emoji'
import timeService from '../services/time'
import tripService from '../services/trip'

const Leg = ({ leg }) => {

  const mode = tripService.returnDevice(leg.mode)
  const route = () => {
    if (leg.route) {
      return leg.route && leg.route.shortName
    }
    return tripService.distance(leg.distance) + 'km'
  }

  const start = () => {
    if (leg.from.name === 'Origin') {
      return 'Ruskeasanta'
    }
    return leg.from.name
  }

  const destination = () => {
    if (leg.to.name === 'Destination') {
      return 'Eficode'
    }
    return leg.to.name
  }

  return (
    <div className={leg.mode}>
      <div className="emoji">{emojiDisplayer(leg.mode)}</div>
      <p>Kulje {mode} {route()}:</p>
      <p>{start()} - {destination()}</p>
      <p> Lähtö: {timeService.date(leg.startTime)}</p>
      <p> Perillä: {timeService.date(leg.endTime)}</p>
      <p> Kesto: {timeService.time(leg.duration)}</p>
    </div>
  )
}

export default Leg