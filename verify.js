var generate = require('./generate')

module.exports = verify

function verify (code, id, secret) {
  return generate(id, secret) === code
}
