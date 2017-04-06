const assert = require('assert')
const fs = require('fs')
const path = require('path')
const _ = require('underscore')

const validate = function(field, value, options) {
  const file = value instanceof Array ? value[0] : value

  assert(file && file.path != null, `The ${field} object is not a file`)

  // get file stat
  const stat = fs.lstatSync(file.path)

  if (options.extensions) {
    const filename = file.name || file.filename
    assert(options.extensions.indexOf(path.extname(filename)) > -1, 'Invalid file extension')
  }

  if (options.max) {
    assert(stat.size <= options.max, 'File is too large')
  }
}

module.exports = validate
