var spinners = {
		Box1    : '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'
	,	Box2    : '⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓'
	,	Box3    : '⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆'
	,	Box4    : '⠋⠙⠚⠒⠂⠂⠒⠲⠴⠦⠖⠒⠐⠐⠒⠓⠋'
	,	Box5    : '⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠴⠲⠒⠂⠂⠒⠚⠙⠉⠁'
	,	Box6    : '⠈⠉⠋⠓⠒⠐⠐⠒⠖⠦⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈'
	,	Box7    : '⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈'
	,	Spin1   : '|/-\\'
	,	Spin2   : '◴◷◶◵'
	,	Spin3   : '◰◳◲◱'
	,	Spin4   : '◐◓◑◒'
	,	Spin5   : '▉▊▋▌▍▎▏▎▍▌▋▊▉'
	,	Spin6   : '▌▄▐▀'
	,	Spin7   : '╫╪'
	,	Spin8   : '■□▪▫'
	,	Spin9   : '←↑→↓'
}
var pos = 0
	,	timeouts = []
	, words = ''

function Spin (words, type) {
	var spinner = type ? spinners[type] : spinners.Spin1
	words = words || ''
	process.stdout.write('\r\x1b[36m' + words + '\033[m ' + spinner.charAt(pos) + ' ')
	if (pos === spinner.length - 1)
		pos = 0
	else
		pos ++
	timeouts.push ( setTimeout(function () {
		Spin(words, type)
	}, 100) )
}

function restart (words, type) {
	destroy()
	Spin(words, type)
}

function stop () {
	for (var i in timeouts) {
		clearTimeout(timeouts[i]);
	}
	timeouts = []
}

function destroy () {
	var width = (process.stdout.isTTY) ? process.stdout.getWindowSize()[0] : 0
	process.stdout.write('\r\x1b[36m'+ (Array(Math.floor(width) + 1).join(' ')) +'\033[m')
	stop()
}

exports.stop  = stop

exports.start = exports.run = Spin

exports.destroy = destroy

exports.restart = restart
