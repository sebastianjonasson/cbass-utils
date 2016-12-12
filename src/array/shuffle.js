var getRandomInt = require('../math/get-random-int.js');
var clone = require('../deep-clone.js')

function shuffle (list, repeats, count) {
	var count = 0, swapIndex, value1, value2;

	list = clone(list);

	if (Array.isArray(list) === false || list.length === 0) {
		return [];
	}

	repeats = repeats || 20;
	count = 0;

  return (function shuffleArr(list, repeats, count) {
    for (var i = 0; i < list.length; i++) {
      swapIndex = getRandomInt(0, list.length);

      value1 = list[i];
      value2 = list[swapIndex];

      list[i] = value2;
      list[swapIndex] = value1;
    }

    count++;

    return (count === repeats)
      ? list
      : shuffleArr(list, repeats, count);

  }(list, repeats, count))
}

module.exports = shuffle;
