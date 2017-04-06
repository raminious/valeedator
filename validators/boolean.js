const assert = require('assert')

const validate = function(field, value, options) {
  assert(value === true || value === false, `${field} should be boolean`)
}

module.exports = validate
