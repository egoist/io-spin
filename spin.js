var spinners = require('./spinners')

function Spin(placeholder, type) {
  if (!(this instanceof Spin)) return new Spin(placeholder, type)

  this.pos = 0
  this.placeholder = placeholder ? placeholder + ' ' : ''
  this.type = type || 'Spin1'
}

Spin.prototype = {
  counstructor: Spin,
  start: function () {
    this.spinner = spinners[this.type]
    this.loop = setInterval(function () {
      process.stdout.write('\r' + this.placeholder + this.spinner[this.pos] + ' ')
      if (this.pos === this.spinner.length - 1) {
        this.pos = 0
      } else {
        this.pos++
      }
    }.bind(this), 100)
    return this
  },
  stop: function () {
    process.stdout.clearLine()
    process.stdout.write('\r')
    clearInterval(this.loop)
    return this
  },
  update: function (placeholder) {
    process.stdout.clearLine()
    this.placeholder = placeholder + ' '
    return this
  }
}

module.exports = Spin
