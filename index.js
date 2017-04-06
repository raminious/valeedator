'use strict'
const _ = require('underscore')

// validators
const validators = {
  required: require('./validators/required'),
  in: require('./validators/in'),
  file: require('./validators/file'),
  boolean: require('./validators/boolean'),
  number: require('./validators/number')
}

const Validator = {
  scenario: null,
  stopOnError: true,
  errors: [],
  attributes: {}
}

Validator.run = function(attributes, source) {

  // reset errors
  Validator.errors = []

  _.find(attributes, attr => {
    const fields = Array.isArray(attr[0]) ? attr[0] : [attr[0]]
    const validator = attr[1]
    const options = attr[2] || {}

    _.find(fields, field => {

      if (!validators[validator]) {
        throw new Error('Invalid validator name')
      }

      try {
        // check scenario
        if (options.on && options.on !== Validator.scenaro) {
          return false
        }

        // check before validation
        if (options.when && options.when() === false) {
          return false
        }

        // validate field
        validators[validator](field, source[field], options)

        // set attribute
        Validator.attributes[field] = source[field]
      }
      catch(e) {

        // push error to list
        Validator.errors.push({ field, message: e.message })

        // reset all attributes list
        Validator.attributes = {}

        // break if stopOnError is true
        if (Validator.stopOnError) {
          return true
        }
      }
    })
  })

  return Validator.errors.length === 0
}

module.exports = Validator
