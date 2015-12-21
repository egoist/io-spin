# io-spin

[![NPM version](https://img.shields.io/npm/v/io-spin.svg)](https://www.npmjs.com/package/io-spin)
[![NPM download](https://img.shields.io/npm/dm/io-spin.svg)](https://www.npmjs.com/package/io-spin)
[![Build Status: Linux](https://travis-ci.org/egoist/io-spin.svg?branch=master)](https://travis-ci.org/egoist/io-spin)

Little terminal spinner lib for Node.js and io.js

![io-spin.gif](https://ooo.0o0.ooo/2015/12/20/567768f40ac91.gif)

## Installation

```bash
$ npm install io-spin
```

## Example

```javascript
var Spin = require('io-spin')
var spin = new Spin()
// Spin(type, placeholder)

spin.start()
// call spin.stop() to stop spinner
spin.update(placeholder)
// upload placeholder
// eg: update Installing 0% to Installing 1%
```

[Checkout all the spinner types!](/spinners.json)

## GIF (original from tj/go-spin)

![gif](https://raw.githubusercontent.com/tj/go-spin/master/go-spin.gif)

## License

MIT &copy; [EGOIST](https://github.com/egoist)
