
// 控制rem大小值
(function(){
		var container = document.getElementById('container');
		var htm = document.getElementsByTagName('html')[0];
		var top = document.getElementsByClassName('top')[0];
		var ld = document.getElementById('lingdang')
		// var resize = window.onresize ? resize : orientationchange;
		// console.log(resize); 
		htm.style.fontSize = '100px';
		window.onresize = function(){	
		var width = container.clientWidth;
		htm.style.fontSize = (width <= 720) ? (100*(width/720)) + 'px':'100px';
	}
	setTimeout(function(){
		window.scrollTo(0,0);
		window.onresize();
	},0);
	window.onscroll = function(e){
		var Y = document.body.scrollTop;
		console.log(Y)
		if(Y>300){
			top.style.background = 'rgba(255,255,255,1)';
			top.style.color = '#666';
			ld.src = 'images/icon_message_black.png'	
		}else if(Y>200){
			top.style.background = 'rgba(255,255,255,.6)';
			top.style.color = '#fcfdfe';
			ld.src = "images/icon_message_white.png";
		}else if(Y>100){
			top.style.background = 'rgba(255,255,255,.2)'
		}else{
			top.style.background = 'rgba(255,255,255,0)';

		}			
	}
})();

(function(){

})();
// swiper插件
(function(){
	// 轮播
	var mySwiper = new Swiper('.swiper-lunbo',{
		//自动播放  (停留时间) 可单独设置给某个slide   data-swiper-autoplay="2000" 
		autoplay:2000,
		//用户操作swiper后 是否禁止autoplay   默认值为true（停止）  false  不停止，会重新启动autoplay
		autoplayDisableOnInteraction:false,
		//当切换到最后一个slide时是否停止    默认值：false  不停止      true停止
		autoplayStopOnLast:false,
		//从第几个开始
		initialSlide :0, 
		// 滑动方向   水平'horizontal'（默认值）    垂直    'vertical',
		direction: 'horizontal',
		//滑动速度   （从开始滑动到结束的时间）
		speed:500,
		// 循环
		loop:true,
		// 分页器
		pagination: '.swiper-p1',
		paginationClickable :true,
	})
	// 超值精选
	var mySwiper1 = new Swiper('.swiper-super',{
		slidesPerView:2.5,
	})
	// 公告
	var mySwiper2 = new Swiper('.swiper-affiche',{
		autoplay:2000,
		direction: 'vertical',
		speed:500,
		loop:true,
	})
})();

