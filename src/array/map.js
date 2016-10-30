function map(iteratee, handler, context) {
  var output = []
  
  for (var i = 0; i < iteratee.length; i++) {
    output.push(handler.call(context, iteratee[i]))
  }
  
  return output
}

module.exports = map