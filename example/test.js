var spin = require('..')

spin.run()
//spin.run('Coumputing:', 'Box1')

setTimeout(function () {
	spin.destroy()
}, 3000)

//spin.restart()