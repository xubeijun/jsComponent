/**
 * [autoWH It adjust dom's width and height]
 * @param  {[string]} w [width] 
 * @param  {[string]} h [height]
 * @param  {[boole]} sp [Is automatically adjust to the width and height relative to the screen or the parent]
 * @descript{[param]} w , h [ 0.1 or 30px]
 * @return {[type]}   [description]
 */
$.fn.autoWH = function(w,h,sp){
	var pw,ph = "";

	pw = !!sp?$(window).width():$(this).parent().width();
	ph = !!sp?$(window).height():$(this).parent().height();

	pw = isNaN(w)?parseInt(w):(pw*w);
	ph = isNaN(h)?parseInt(h):(ph*h);
	$(this).css({"width":pw,"height":ph});
};