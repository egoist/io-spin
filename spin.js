var spinners = {
  Box1: '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
  Box2: '⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓',
  Box3: '⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆',
  Box4: '⠋⠙⠚⠒⠂⠂⠒⠲⠴⠦⠖⠒⠐⠐⠒⠓⠋',
  Box5: '⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠴⠲⠒⠂⠂⠒⠚⠙⠉⠁',
  Box6: '⠈⠉⠋⠓⠒⠐⠐⠒⠖⠦⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈',
  Box7: '⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈',
  Spin1: '|/-\\',
  Spin2: '◴◷◶◵',
  Spin3: '◰◳◲◱',
  Spin4: '◐◓◑◒',
  Spin5: '▉▊▋▌▍▎▏▎▍▌▋▊▉',
  Spin6: '▌▄▐▀',
  Spin7: '╫╪',
  Spin8: '■□▪▫',
  Spin9: '←↑→↓',
  Chinese1: '一十干王土十一',
  Chinese2: '嬲嫐'
}

function Spin (type, words) {
  this.pos = 0
  this.words = words ? words + ' ' : ''
  this.type = type || 'Spin1'
}

Spin.prototype = {
  counstructor: Spin,
  start: function () {
    var spinner = spinners[this.type]
    this.loop = setInterval(function () {
      process.stdout.write('\r' + this.words + spinner.charAt(this.pos))
      if (this.pos === spinner.length - 1) {
        this.pos = 0
      } else {
        this.pos++
      }
    }.bind(this), 100)
  },
  stop: function () {
    clearInterval(this.loop)
  }
}

module.exports = Spin
