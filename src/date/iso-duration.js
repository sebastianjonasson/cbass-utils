function ISODuration (date, duration) {
  var ISODurationRegex = /P((([0-9]*\.?[0-9]*)Y)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)W)?(([0-9]*\.?[0-9]*)D)?)?(T(([0-9]*\.?[0-9]*)H)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)S)?)?/;
  
  if(typeof duration !== 'string') {
    //throw err
    return console.log('err');
  }

  if(ISODurationRegex.test(duration) === false) {
    //Throw err
    return console.log('err');
  }

  var matches = duration.match(ISODurationRegex);
  
  var durations = {
    FullYear: parseFloat(matches[3]),
    Month: parseFloat(matches[5]),
    Hours: (function () {
      var weeks = parseFloat(matches[7]) || 0;
      var days = parseFloat(matches[9]) || 0;
      var hours = parseFloat(matches[12]) || 0;
      return hours + days * 24 + weeks * 24 * 7
    }()),
    Minutes: parseFloat(matches[14]),
    Seconds: parseFloat(matches[16])
  };
  
  for(var prop in durations) {
    var getter = "get" + prop;
    var setter = "set" + prop;
    var value = date[getter]() + (durations[prop] || 0);
    
    date[setter](value);
  }
	
  return date;
}

module.exports = ISODuration
