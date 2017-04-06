const assert = require('assert')

const validate = function(field, value, options) {
  assert(typeof value !== 'undefined', field + ' is required')
}

module.exports = validate
