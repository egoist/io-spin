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
var spin = require('io-spin')
var spinner = spin('Fetching data')

spinner.start()
spinner.stop()
spinner.update(placeholder)
// upload placeholder
// eg: update Installing 0% to Installing 1%
```

## API

### spin(placeholder, type)

#### placeholder

Type: `string`<br>
Default: `''`

The placeholder to show with the spinner.

#### type

Type: `string`<br>
Default: `spin1`

The spinner type. [Checkout all the spinner types!](/spinners.json)

### .start

Start the spinner.

### .stop

Stop the spinner and clear it.

### .update(placeholder)

Update the placeholder text.

## GIF (original from tj/go-spin)

![gif](https://raw.githubusercontent.com/tj/go-spin/master/go-spin.gif)

## License

MIT &copy; [EGOIST](https://github.com/egoist)
