var Spin = require('..')
var spin = new Spin('Box2', 'Installing')

spin.start()

setTimeout(function () {
  spin.stop()
}, 1000)
