var spinners = require('./spinners')

function Spin (type, words) {
  this.pos = 0
  this.words = words ? words + ' ' : ''
  this.type = type || 'Spin1'
}

Spin.prototype = {
  counstructor: Spin,
  start: function () {
    this.spinner = spinners[this.type]
    this.loop = setInterval(function () {
      process.stdout.write('\r' + this.words + this.spinner[this.pos] + ' ')
      if (this.pos === this.spinner.length - 1) {
        this.pos = 0
      } else {
        this.pos++
      }
    }.bind(this), 100)
  },
  stop: function () {
    process.stdout.clearLine()
    process.stdout.write('\r')
    clearInterval(this.loop)
  },
  update: function (words) {
    process.stdout.clearLine()
    this.words = words + ' '
  }
}

module.exports = Spin
