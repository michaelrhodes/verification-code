var alpha = /[^0-9]/g

module.exports = numeric

function numeric (val) {
  return !isNaN(val = '' + val) ?
    val.replace(alpha, '') :
    sum(val)
}

function sum (str) {
  var i = 0, l = str.length, v = ''
  for (; i < l; i++) v += str.charCodeAt(i)
  return v
}
