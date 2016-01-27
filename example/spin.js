var Spin = require('..')
var spin = new Spin('Dot2', 'Installing')

spin.start()

var deps = [
  'lodash',
  'underscore',
  'react',
  'vue',
  'moment',
  'marked'
]
var n = 0

function show (n) {
  spin.update('Loading ' + n + ' ' + deps[n])
  n++
  setTimeout(function () {
    if (n === 6) {
      stop()
      return
    }
    show(n)
  }, 1000)
}

function stop () {
  setTimeout(function () {
    spin.stop()
    console.log('bye')
  }, 2000)
}

show(n)
