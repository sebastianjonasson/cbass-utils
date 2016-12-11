var getRandomInt = require('../math/get-random-int.js');

function shuffle (list, repeats, count) {
	var swapIndex, value1, value2;

	if (Array.isArray(list) === false || list.length === 0) {
		return [];
	}

	repeats = repeats || 20;
	count = count || 0;

	for (var i = 0; i < list.length; i++) {
		swapIndex = getRandomInt(0, list.length);
		
		value1 = list[i];
		value2 = list[swapIndex];

		list[i] = value2;
		list[swapIndex] = value1;
	}

	return (count === repeats)
	  ? list
		: shuffle(list, repeats, count);
}

module.exports = shuffle;
