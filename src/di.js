module.exports = function DI () {
	var register = {};

	this.register = function(key, value) {
		register[key] = value;
	}

	this.wrap = function (fn) {
		return fn.bind(null, register);
	}
}
