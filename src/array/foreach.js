function foreach (iteratee, handler, context) {
  for (var i = 0; i < iteratee.length; i++) {
    handler.call(context, iteratee[i])
  }
}
module.exports = foreach
