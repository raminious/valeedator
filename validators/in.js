const assert = require('assert')

const validate = function(field, value, options) {
  assert(options.range.indexOf(value) > -1, field + ' not valid')
}

module.exports = validate
