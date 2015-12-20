# io-spin

[![NPM version](https://img.shields.io/npm/v/io-spin.svg)](https://www.npmjs.com/package/io-spin)
[![NPM download](https://img.shields.io/npm/dm/io-spin.svg)](https://www.npmjs.com/package/io-spin)
[![Build Status: Linux](https://travis-ci.org/egoist/io-spin.svg?branch=master)](https://travis-ci.org/egoist/io-spin)

Little terminal spinner lib for Node.js and io.js

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
```

## GIF (original from tj/go-spin)

![gif](https://raw.githubusercontent.com/tj/go-spin/master/go-spin.gif)

## License

MIT &copy; [EGOIST](https://github.com/egoist)
