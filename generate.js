var adler32 = require('adler32')
var numeric = require('./numeric')

module.exports = generate

function generate (id, secret) {
  return adler32
    .sum(numeric(id) + numeric(secret))
    .toString()
    .substr(-6)
}
