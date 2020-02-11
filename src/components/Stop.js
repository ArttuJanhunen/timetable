import React from 'react'

const Stop = ({ result }) => {
  if (result.loading) {
    return <div>Loading..</div>
  }

  const stop = result.data.stop
  console.log(result)

  return (
    <div>
      <h2>{stop.name}</h2>
      <p>{stop.lat}</p>
      <p>{stop.lon}</p>
      {stop.routes.map(route =>
        <div>
          <p>Lyhyt nimi: {route.shortName}</p>
          <p>Pitkä nimi: {route.longName}</p>
        </div>
      )}
    </div>
  )
}

export default Stop