(function(){
	// var freedom = function(){};
	var freedom = {};
	var version = "1.0",
		author = "freedom-diy";

	freedom.fn = freedom.prototype = {
		f:version,
		author:author
	};

	freedom.add = function(){
		var args = arguments;
		var res = 0;
		for (var i = 0; i < args.length; i++) {
			res += args[i];
		}
		return res;
	};
	
	freedom.min = function(){
		var args = arguments;
		var res = 0;
		for (var i = 0; i < args.length; i++) {
			res = i===0?args[i]:res-args[i];
		}
		return res;
	};

	window.freedom = window.f = freedom;

	return freedom;
})();