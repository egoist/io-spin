var spinners = require('./spinners')

function Spin(placeholder, type) {
  if (!(this instanceof Spin)) return new Spin(placeholder, type)

  this.pos = 0
  this.placeholder = placeholder || ''
  this.type = type || 'Spin1'
}

Spin.prototype = {
  counstructor: Spin,
  start: function () {
    this.spinner = spinners[this.type]
    this.loop = setInterval(function () {
      process.stdout.write('\r' + this.spinner[this.pos] + ' ' + this.placeholder)
      this.pos = ++this.pos % this.spinner.length
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
