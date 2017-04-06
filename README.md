# valeedator
a simple validator for node

currently these types of validation are supported:  
1- required  
2- boolean  
3- in  
4- file  
5- number  

`npm install valeedator`  

`const validator = require('validator')`

```
const attributes = [
  [['name', 'type', 'caption'], 'required'],
  ['file', 'required', { on: 'insert' }],
  ['file', 'file', {
    when: () => type !== 'text',
    max: 1024 * 1024 * 5,
    extensions: 'jpg,png,jpef'
  }],
  ['type', 'in', { range: ['text', 'video'] }]
]

// change this line to your input source
const inputs = {
  name: 'John',
  type: 'text',
  caption: 'caption #1'
}

const validate = validator.run(attributes, inputs)

if (!validate) {
  console.log(validator.errors)
}

```
