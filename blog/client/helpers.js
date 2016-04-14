Template.register.helpers({
	userForm: function() {
		return UsersSchema;
	}
});

Template.login.helpers({
	userLoginForm: function() {
		return UsersLoginSchema;
	}
});

Template.body.onRendered(function () {
	// $("html").niceScroll({
	// 	scrollspeed: 120,
 //    	mousescrollstep: 80,
	// 	bouncescroll: true,
	// 	touchbehavior: true,
	// });
	// 
	// 
	// (function($){
 //        $(window).load(function(){
 //            $("body").mCustomScrollbar({
	// 	    	//documentTouchScroll: false,
	// 	    	//contentTouchScroll: 50,
	// 	    	callbacks:{
	// 				onInit:function(){
	// 				  	console.log("Scrollbars initialized");
	// 				},
	// 				onScrollStart:function(){
	// 			      	console.log("Scrolling started...");
	// 			    }
	// 			}
	// 	    });
 //        });
 //    })(jQuery);
    

	// jQuery.extend(jQuery.easing, {
	//     easeOutQuint: function(x, t, b, c, d) {
	//         return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	//     }
	// });

	// var wheel = false;
	// var $scrollTop = $(window).scrollTop();
	// var touchStart = 0;
	// var touchEnd = 0;

	// $(window).bind('scroll', function(e, delta) {
	// 	//console.log(e.originalEvent.touches[0].pageY);
	//     if (wheel === false) {
	//         $scrollTop = $(this).scrollTop();
	//     }
	// });

	// $(document).bind('touchstart', function (e) {
	// 	console.log(e.originalEvent.touches[0].pageY + " start");
	// 	touchStart = e.originalEvent.touches[0].pageY;
	// });

	// $(document).bind('DOMMouseScroll mousewheel touchmove', function(e, delta) {
	// 	//console.log(startEvent + " dungthan");
	// 	//console.log(e.originalEvent.touches[0].pageY + " dungthan");
	// 	console.log(e.originalEvent.pageY + " end");
	// 	//console.log(touchStart + " -- " + touchEnd);
	// 	var heightTouch = touchStart - e.originalEvent.pageY;
	// 	console.log(heightTouch);
	// 	var $docH = $(document).height() - $(window).height();
		
	//     delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120 || -heightTouch / 30;
	//     //console.log(delta);
	//     wheel = true;
	//     //console.log($scrollTop + " dungthan");
	//     $scrollTop = Math.min($docH, Math.max(0, parseInt($scrollTop - delta * 30)));
	//     //console.log($scrollTop);
	//     $('body').stop().animate({
	//         scrollTop: $scrollTop + 'px'
	//     }, 2000, 'easeOutQuint', function() {
	//         wheel = false;
	//     });
	//     return false;
	// });
});