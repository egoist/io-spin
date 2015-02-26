var spin = require('..')

spin.run('Computing:', 'Spin1')

setTimeout(function () {
	spin.destroy()
}, 3000)




