function filter (iteratee, handler, context) {
  var output = []

  for (var i = 0; i < iteratee.length; i++) {
    if (handler.call(context, iteratee[i])) {
      output.push(iteratee[i])
    }
  }

  return output
}

module.exports = filter
