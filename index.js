$(function() {
	var animationName = 'animated shake';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('div.ui#button1').on('click',function() {
		$('i.huge#move1').addClass(animationName).one(animationEnd,function() {
			$(this).removeClass(animationName);
		});
	});

});
$(function() {
	var animationName = 'animated bounce';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('div.ui#button2').on('click',function() {
		$('i.huge#move2').addClass(animationName).one(animationEnd,function() {
			$(this).removeClass(animationName);
		});
	});

});	
$(function() {
	var animationName = 'animated flash';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('div.ui#button3').on('click',function() {
		$('i.huge#move3').addClass(animationName).one(animationEnd,function() {
			$(this).removeClass(animationName);
		});
	});

});	
$(function() {
	var animationName = 'animated pulse';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('div.ui#button4').on('click',function() {
		$('i.huge#move4').addClass(animationName).one(animationEnd,function() {
			$(this).removeClass(animationName);
		});
	});

});	
$(function() {
	var animationName = 'animated rubberBand';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('div.ui#button5').on('click',function() {
		$('i.huge#move5').addClass(animationName).one(animationEnd,function() {
			$(this).removeClass(animationName);
		});
	});

});
$(function() {
	var animationName = 'animated headShake';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('div.ui#button6').on('click',function() {
		$('i.huge#move6').addClass(animationName).one(animationEnd,function() {
			$(this).removeClass(animationName);
		});
	});

});	
$(function() {
	var animationName = 'animated swing';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('div.ui#button7').on('click',function() {
		$('i.huge#move7').addClass(animationName).one(animationEnd,function() {
			$(this).removeClass(animationName);
		});
	});

});	