const fs = require('fs')

global.owner = "6285866034212"
global.nmbot = "Zrzz"
global.idSaluran = '120363390274692764@newsletter'
global.p = '`'
global.urlfoto = 'https://files.catbox.moe/74efui.jpg'
global.url = 'T.me/ArgaOfficial'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
