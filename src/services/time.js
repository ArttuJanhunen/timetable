const dateFormat = require('dateformat')

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

export default { date, time } 