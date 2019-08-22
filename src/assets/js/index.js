export function evils (str) {
  str = '("' + str.replace('&#x', '\\u').replace(';', '') + '")'
  var Fn = Function
  return new Fn('return ' + str)()
}
