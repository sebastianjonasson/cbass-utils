var paramValidation = require('./param-validator.js')

function foreach (iteratee, handler, context) {
  if (paramValidation('Foreach', iteratee, handler, context) === false) {
  	return
  }

  for (var i = 0; i < iteratee.length; i++) {
    handler.call(context, iteratee[i], i)
  }
}

module.exports = foreach
