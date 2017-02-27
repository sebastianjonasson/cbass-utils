module.exports = {
  /*
	 *	Match
	 */
  deepClone: require('./deep-clone.js'),
  DI: require('./di.js'),

	/*
	 *	Array
	 */
	foreach: require('./array/foreach.js'),
  map: require('./array/map.js'),
  filter: require('./array/filter.js'),
  find: require('./array/find.js'),
  shuffle: require('./array/shuffle.js'),
  
	/*
	 * Math
	 */
	getRandomInt: require('./math/get-random-int.js'),
	
	/*
	 *	Date
	 */
	setISODuration: require('./date/iso-duration.js'),
}
