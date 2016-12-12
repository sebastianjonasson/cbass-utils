function clone (obj) {
  var _obj

  // Return if single value
  if (typeof obj !== 'object') {
    return obj
  }

  // Iterate array
  if (Array.isArray(obj)) {
    _obj = []

    for (var i = 0; i < obj.length; i++) {
      _obj[i] = clone(obj[i])
    }

    return _obj
  }

  // Else iterate object keys.
  _obj = {}

  for (var prop in obj) {
    _obj[prop] = clone(obj[prop])
  }

  return _obj
}

module.exports = clone
