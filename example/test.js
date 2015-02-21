var spin = require('..')

spin.run('Computing:', 'Spin1')

setTimeout(function () {
	spin.restart('Computing:', 'Box1')
	setTimeout(function () {
		spin.stop()
	},2000)
}, 3000)




