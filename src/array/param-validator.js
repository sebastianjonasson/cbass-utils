function validate (fnName, iteratee, handler, context) {
  if (Array.isArray(iteratee) === false) {
    console.log(`${fnName}: iteratee needs to be an Array.`)
    throw new Error(`${fnName}: iteratee needs to be an Array.`)
  }

  if (typeof handler !== 'function') {
    throw new TypeError(`${fnName}: handler needs to be a function.`)
  }

  if (context !== undefined && typeof context !== 'object') {
    throw new TypeError(`${fnName}: context need to be an object.`)
  }

  return true
}

module.exports = validate
