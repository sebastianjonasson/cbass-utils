### Cbass utils - JavaScript helper functions

This is just a lib where I implement my own javascript helper functions.

### DOCs

#### Object
##### utils#deepClone(object)
Returns a deep copy of the passed in object

```javascript
var utils = require('cbass-utils');
var obj = { foo: 'bar'};

var newObj = utils.deepClone( obj );
```

#### Array
##### utils#shuffle(iteratee, repeats)
Takes an array as input and returns a new array with the values in random order.

Params
iteratee: array of items to be shuffled
repeats: number of shuffles that should be performed onto the array. Default 20.

```javascript
var utils = require('cbass-utils');
var arr = [1,2,3,4]

var shuffledArr = utils.shuffle( arr );
console.log( shuffledArr ) // [2,3,4,1]
```

##### utils#forEach(iteratee, callback, context)
Reimplementation of `Array.prototype.forEach`

Params
iteratee: array of items to be shuffled
callback: function to be ran for each item in list
context: context of callback

```javascript
var utils = require('cbass-utils');
var arr = [1,2,3,4];
var context = {};

utils.forEach(arr, function(value, index) {
    console.log( value );
}, context)
```

##### utils#map(iteratee, callback, context)
Reimplementation of `Array.prototype.map`

Params
iteratee: array of items to be shuffled
callback: function to be ran for each item in list
context: context of callback

```javascript
var utils = require('cbass-utils');
var arr = [1,2,3,4];
var context = {};

var ret = utils.map(arr, function(value, index) {
    return value * index;
}, context)
```

##### utils#filter(iteratee, callback, context)
Reimplementation of `Array.prototype.filter`

Params
iteratee: array of items to be shuffled
callback: function to be ran for each item in list
context: context of callback

```javascript
var utils = require('cbass-utils');
var arr = [1,2,3,4];
var context = {};

var ret = utils.filter(arr, function(value, index) {
    return ( value % 2 === 0 );
}, context)
```

##### utils#find(iteratee, callback, context)
Reimplementation of `Array.prototype.find`

Params
iteratee: array of items to be shuffled
callback: function to be ran for each item in list
context: context of callback

```javascript
var utils = require('cbass-utils');
var arr = [1,2,3,4];
var context = {};

var ret = utils.find(arr, function(value, index) {
    return (index === 1);
}, context)
```

#### Math
##### utils#getRandomInt(min, max)
Function for returning a random int within a specified range. 

Params:
min: minimum value of int
max: maximum value of int
```javascript
var utils = require('cbass-utils');

var randomInd = utils.getRandomInt(1,10);
```
