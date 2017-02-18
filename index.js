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