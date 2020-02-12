import React from 'react'

const Leg = ({ leg, date, returnDevice, time }) => {

  return (
    <div>
      <div className={leg.mode}>
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
    </div>
  )
}

export default Leg