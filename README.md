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

2.匿名函数封装jQuery扩展代码。
- [jqnoConflict](https://github.com/freedom-diy/jsComponent/blob/master/views/jqExtend/jqnoConflict.html)
```
(function($){
	//封装的代码
}(jQuery));
```
3.JS封装模块
```
	- [jsModule](https://github.com/freedom-diy/jsComponent/blob/master/views/jsModule/jsModule.html)
	(function(){
		//内部代码
		//暴露API接口
	})();
```
4.JS封装库
```
	//todoList
```

5.[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)_[requireJS](http://requirejs.org/)的模块写法
```
	//todoList
```

6.[CMD](https://github.com/seajs/seajs/issues/242)_[SeaJS](http://seajs.org/docs/)的模块写法
```
	//todoList
```


###需要注意的是
+零散代码封装成单元
+导出模块的接口API
+方便引用其他模块