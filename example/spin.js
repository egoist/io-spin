var Spin = require('..')
var spin = new Spin('Box1', 'Installing')

spin.start()

setTimeout(function () {
  spin.stop()
}, 1000)
