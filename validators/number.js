const assert = require('assert')

const validate = function(field, value, options) {
  assert(typeof value === 'number', `${field} is not number`)

  if (typeof options.min !== 'undefined') {
    assert(value >= options.min, `${field} must greater than ${options.min}`)
  }

  if (typeof options.max !== 'undefined') {
    assert(value <= options.max, `${field} must lower than ${options.max}`)
  }
}

module.exports = validate
