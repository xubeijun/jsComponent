# jsComponent
How to build a JavaScript component.
这里举例如何去封装JS组件。


	jsComponent\views\jqExtend\jQueryExtend.html
	演示了以$.fn的方式，去扩展jQuery插件。


	jsComponent\views\jqExtend\jqnoConflict.html
	演示了，用匿名函数封装扩展代码
	(function($){
		//封装的代码
	}(jQuery));。