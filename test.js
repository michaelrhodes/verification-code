var assert = require('assert')
var code = require('./index')

var id = 2
var secret = 's3cr3t!'

// Code should be a six-digit numeric string
assert.equal(code.generate(id).length, 6)
assert.equal(code.generate(id, secret).length, 6)
assert.equal(isNaN(code.generate(id)), false)
assert.equal(isNaN(code.generate(id, secret)), false)

// Code should verify correctly
assert.equal(code.verify(code.generate(id), id), true)
assert.equal(code.verify(code.generate(id, secret), id, secret), true)
assert.equal(code.verify(code.generate(id), id, secret), false)
assert.equal(code.verify(code.generate(id, secret), id), false)
