function find (iteratee, handler, context) {
  for (var i = 0; i < iteratee.length; i++) {
    if (handler.call(context, iteratee[i])) {
    	return iteratee[i]
    }
  }

  return null
}
module.exports = find
