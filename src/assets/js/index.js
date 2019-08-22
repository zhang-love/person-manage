export default {
  evil: function (str) {
    str = '("' + str.replace('&#x', '\\u').replace(';', '') + '")'
    var Fn = Function
    return new Fn('return ' + str)()
  }
}
