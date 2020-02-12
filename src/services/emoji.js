const emoji = require('node-emoji')

const emojiOptions = new Map([
  ['WALK', emoji.get('mans_shoe')],
  ['RAIL', emoji.get('bullettrain_front')],
  ['SUBWAY', emoji.get('metro')],
  ['TRAM', emoji.get('tram')],
  ['BUS', emoji.get('oncoming_bus')],
])

const emojiDisplayer = (mode) => {
  const showEmoji = emojiOptions.get(mode)
  return showEmoji
}

export default emojiDisplayer
