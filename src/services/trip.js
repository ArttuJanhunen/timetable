const distance = (meters) => {
  const km = Math.round(meters) / 1000
  const prettyKm = km.toString().substr(0, 3)
  return prettyKm
}

const device = new Map([
  ['WALK', 'jalan'],
  ['RAIL', 'junalla'],
  ['BUS', 'bussilla'],
  ['SUBWAY', 'metrolla'],
  ['TRAM', 'raitiovaunulla']
])

const returnDevice = (mode) => {
  let modeInFinnish = device.get(mode)
  return modeInFinnish
}

export default { distance, returnDevice }