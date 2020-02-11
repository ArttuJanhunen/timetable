import React from 'react'
const dateFormat = require('dateformat')

const Route = ({ result }) => {
  if (result.loading) {
    return <div>Loading..</div>
  }

  const routes = result.data.plan.itineraries
  console.log(result)
  console.log(routes)

  const time = (secs) => {
    let hours = Math.floor(secs / 3600)
    secs %= 3600
    let minutes = Math.floor(secs / 60)
    let seconds = secs % 60

    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0")
    return (`${hours}:${minutes}:${seconds}`)
  }

  const date = (secs) => {
    let date = new Date(secs).toString()
    return dateFormat(date, "HH:MM, dd.mm.yy")
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
            <h2>Seuraava lähtö kotoa töihin: </h2>
            <p>Lähtö: {date(route.startTime)}, perillä: {date(route.endTime)}</p>
            <p>Kokonaiskävelymatka: {Math.round(route.walkDistance)}m</p>
            <p>Matkan kesto: {time(route.duration)}</p>
          </div>
          {route.legs.map(leg =>
            <div className="phase">
              <p>Kulje {returnDevice(leg.mode)} {leg.mode !== 'WALK' && leg.route.shortName} {leg.mode === 'WALK' &&
                <span>{Math.round(leg.distance)} metriä</span>}:
              {leg.from.name === 'Origin' ?
                  <span> Koti - {leg.to.name}</span>
                  :
                  <span> {leg.from.name} - {leg.to.name === 'Destination' ?
                    <span>Työpaikka</span>
                    :
                    <span>{leg.to.name}</span>
                  }</span>
                }
              </p>
              <p>Lähtöaika: {date(leg.startTime)}</p>
              <p>Saapumisaika: {date(leg.endTime)}</p>
              <p>Kesto: {time(leg.duration)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Route