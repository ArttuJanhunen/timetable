const dateFormat = require('dateformat')

const time = (secs) => {
  const hours = Math.floor(secs / 3600)
  const secsAfterHour = secs %= 3600
  let minutes = Math.floor(secsAfterHour / 60)


  if (hours === 0) {
    return `${minutes}min`
  }
  minutes = String(minutes).padStart(2, '0')
  return (`${hours}h ${minutes}min`)

}

const date = (secs) => {
  const readableDate = new Date(secs).toString()
  return dateFormat(readableDate, 'HH:MM')
}

export default { date, time }
