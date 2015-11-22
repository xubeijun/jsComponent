# jsComponent
###How to build a JavaScript component.
###这里举例如何去封装JS组件。


1.$.fn的方式，去扩展jQuery插件。
- [jQueryExtend](https://github.com/freedom-diy/jsComponent/blob/master/views/jqExtend/jQueryExtend.html)
```	
$.fn.autoWH = function(w,h,sp){
	//内部代码
};
```

2.匿名函数封装扩展代码。
- [jqnoConflict](https://github.com/freedom-diy/jsComponent/blob/master/views/jqExtend/jqnoConflict.html)
```
(function($){
	//封装的代码
}(jQuery));
```