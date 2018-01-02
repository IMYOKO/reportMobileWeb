/*
 * 系统报错JS
 * author: YOKO
 * time: 2017-12-24
 * 
 * 参数说明
 * opt = {
 * 	msg: "这里是提示内容",  //这里是提示内容 
 *  time: 1  //默认显示1秒    可不填
 * }
 * 
 * 使用说明  例：
 * $.msg({msg:'密码错误！',time:1});
 */

;(function($, window, document, undefind) {
	
	//构造函数
	function MsgPulgin(opt) {
		this.defaults = {
			msg: '',
			time: 1
		},
		this.options =  $.extend({}, this.defaults, opt),
		this.msg = this.options.msg,
		this.time = this.options.time,
		this.init()
	}
	
	//原型扩展
	MsgPulgin.prototype = {
		//初始化
		init: function(){
			//判断是否有提示
			var hasMsg = $('.pop-msg-wrapper');
			var len = hasMsg.length;
			if(len>=1){
				hasMsg.show();
			}else{
				this.createHtml();
			}
			this.hideHtml();
		},
		
		//创建节点
		createHtml: function(){
			var msgHtml =   '<div class="pop-msg-wrapper">'+
								'<div class="msg-content">'+ this.msg +'</div>'+
							'</div>';
			$('body').append(msgHtml);
		},
		
		//3秒后隐藏
		hideHtml: function(){
			var count = this.time;
			var interval = setInterval(function(){
				count--;
				if (count < 0) {
	            	clearInterval(interval);
	            	$('.pop-msg-wrapper').remove();
	            };
			},1000)
		}
		
	}
	
	//扩展到JQ
	$.extend({
		msg: function(opt){
			var myMsg = new MsgPulgin(opt);
		}
	});
})(jQuery, window, document);