import React from 'react'
import Leg from './Leg'
const dateFormat = require('dateformat')

const Route = ({ result }) => {
  if (result.loading) {
    return <div className="loading">Loading...</div>
  }

  const routes = result.data.plan.itineraries

  const time = (secs) => {
    let hours = Math.floor(secs / 3600)
    secs %= 3600
    let minutes = Math.floor(secs / 60)


    if (hours === 0) {
      return `${minutes}min`
    } else {
      minutes = String(minutes).padStart(2, "0")
      return (`${hours}h ${minutes}min`)
    }
  }

  const date = (secs) => {
    let date = new Date(secs).toString()
    return dateFormat(date, "HH:MM")
  }

  const distance = (meters) => {
    const km = Math.round(meters) / 1000
    const prettyKm = km.toString().substr(0, 3)
    return prettyKm
  }

  const device = new Map([
    ['WALK', 'jalan'],
    ['RAIL', 'junalla'],
    ['BUS', 'bussilla']
  ])

  const returnDevice = (mode) => {
    let modeInFinnish = device.get(mode)
    return modeInFinnish
  }

  const timer = () => {
    setTimeout(() => {
      window.location.reload()
      timer()
    }, 60000)
  }

  return (
    <div>
      {timer()}
      {routes.map(route =>
        <div className="route-info">
          <div className="head">
            <h2>Kulkuyhteys välille Koti - Eficode</h2>
            <p>Lähtö: {date(route.startTime)}, perillä: {date(route.endTime)}</p>
            <p>Kokonaiskävelymatka: {distance(route.walkDistance)}km</p>
            <p>Matkan kesto: {time(route.duration)}</p>
          </div>
          <div className="phases">
            {route.legs.map(leg =>
              <Leg leg={leg}
                returnDevice={returnDevice}
                time={time}
                date={date}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Route