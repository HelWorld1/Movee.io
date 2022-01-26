$(document).ready(function(){
	$('.menu__btn').click(function(){
		$('.nav-panel__menu-body').toggleClass('hide_menu');
	});
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    let target = $(this.hash);
	    $('html, body').stop().animate({
	        'scrollTop': target.offset().top
	    }, 1000);
	});
	$('.autopark__arrow-left').click(function (){
		// 5
		if($('.autopark__item-2').hasClass('hide_item') && $('.autopark__item-3').hasClass('hide_item') && $('.autopark__item-4').hasClass('hide_item') && $('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-5').toggleClass('hide_item');
			$('.autopark__item-1').toggleClass('hide_item');
			return;
		}
		// 4
		if($('.autopark__item-1').hasClass('hide_item') && $('.autopark__item-2').hasClass('hide_item') && $('.autopark__item-3').hasClass('hide_item') && $('.autopark__item-4').hasClass('hide_item')){
			$('.autopark__item-4').toggleClass('hide_item');
			$('.autopark__item-5').toggleClass('hide_item');
			return;
		}
		// 3
		if($('.autopark__item-1').hasClass('hide_item') && $('.autopark__item-2').hasClass('hide_item') && $('.autopark__item-3').hasClass('hide_item') && $('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-3').toggleClass('hide_item');
			$('.autopark__item-4').toggleClass('hide_item');
			return;
		}
		// 2
		if($('.autopark__item-1').hasClass('hide_item') && $('.autopark__item-2').hasClass('hide_item') && $('.autopark__item-4').hasClass('hide_item') && $('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-2').toggleClass('hide_item');
			$('.autopark__item-3').toggleClass('hide_item');
			return;
		}
		// 1
		if($('.autopark__item-1').hasClass('hide_item') && $('.autopark__item-3').hasClass('hide_item') && $('.autopark__item-4').hasClass('hide_item') && $('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-1').toggleClass('hide_item');
			$('.autopark__item-2').toggleClass('hide_item');
			return;
		}
	});
	$('.autopark__arrow-right').click(function (){
		// 1
		if($('.autopark__item-2').hasClass('hide_item') && $('.autopark__item-3').hasClass('hide_item') && $('.autopark__item-4').hasClass('hide_item') && $('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-1').toggleClass('hide_item');
			$('.autopark__item-2').toggleClass('hide_item');
			return;
		}
		// 2
		if($('.autopark__item-1').hasClass('hide_item') && $('.autopark__item-3').hasClass('hide_item') && $('.autopark__item-4').hasClass('hide_item') && $('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-3').toggleClass('hide_item');
			$('.autopark__item-2').toggleClass('hide_item');
			return;
		}
		// 3
		if($('.autopark__item-1').hasClass('hide_item') && $('.autopark__item-2').hasClass('hide_item') && $('.autopark__item-4').hasClass('hide_item') && $('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-4').toggleClass('hide_item');
			$('.autopark__item-3').toggleClass('hide_item');
			return;
		}
		// 4
		if($('.autopark__item-1').hasClass('hide_item') && $('.autopark__item-2').hasClass('hide_item') && $('.autopark__item-3').hasClass('hide_item') && $('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-5').toggleClass('hide_item');
			$('.autopark__item-4').toggleClass('hide_item');
			return;
		}
		// 5
		if($('.autopark__item-1').hasClass('hide_item') && $('.autopark__item-2').hasClass('hide_item') && $('.autopark__item-3').hasClass('hide_item') && $('.autopark__item-4').hasClass('hide_item')){
			$('.autopark__item-1').toggleClass('hide_item');
			$('.autopark__item-5').toggleClass('hide_item');
			return;
		}
	});
	/* mobile slider */
	/* 1 */
	$('.autopark__circle-1').click(function (){
		/* 2 */
		if(!$('.autopark__item-2').hasClass('hide_item')){
			$('.autopark__item-2').toggleClass('hide_item');
			$('.autopark__item-1').toggleClass('hide_item');
			return;
		}
		/* 3 */
		if(!$('.autopark__item-3').hasClass('hide_item')){
			$('.autopark__item-3').toggleClass('hide_item');
			$('.autopark__item-1').toggleClass('hide_item');
			return;
		}
		/* 4 */
		if(!$('.autopark__item-4').hasClass('hide_item')){
			$('.autopark__item-4').toggleClass('hide_item');
			$('.autopark__item-1').toggleClass('hide_item');
			return;
		}
		/* 5 */
		if(!$('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-5').toggleClass('hide_item');
			$('.autopark__item-1').toggleClass('hide_item');
			return;
		}
	});
	/* 2 */
	$('.autopark__circle-2').click(function (){
		/* 1 */
		if(!$('.autopark__item-1').hasClass('hide_item')){
			$('.autopark__item-1').toggleClass('hide_item');
			$('.autopark__item-2').toggleClass('hide_item');
			return;
		}
		/* 3 */
		if(!$('.autopark__item-3').hasClass('hide_item')){
			$('.autopark__item-3').toggleClass('hide_item');
			$('.autopark__item-2').toggleClass('hide_item');
			return;
		}
		/* 4 */
		if(!$('.autopark__item-4').hasClass('hide_item')){
			$('.autopark__item-4').toggleClass('hide_item');
			$('.autopark__item-2').toggleClass('hide_item');
			return;
		}
		/* 5 */
		if(!$('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-5').toggleClass('hide_item');
			$('.autopark__item-2').toggleClass('hide_item');
			return;
		}
	});
	/* 3 */
	$('.autopark__circle-3').click(function (){
		/* 1 */
		if(!$('.autopark__item-1').hasClass('hide_item')){
			$('.autopark__item-1').toggleClass('hide_item');
			$('.autopark__item-3').toggleClass('hide_item');
			return;
		}
		/* 2 */
		if(!$('.autopark__item-2').hasClass('hide_item')){
			$('.autopark__item-2').toggleClass('hide_item');
			$('.autopark__item-3').toggleClass('hide_item');
			return;
		}
		/* 4 */
		if(!$('.autopark__item-4').hasClass('hide_item')){
			$('.autopark__item-4').toggleClass('hide_item');
			$('.autopark__item-3').toggleClass('hide_item');
			return;
		}
		/* 5 */
		if(!$('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-5').toggleClass('hide_item');
			$('.autopark__item-3').toggleClass('hide_item');
			return;
		}
	});
	/* 4 */
	$('.autopark__circle-4').click(function (){
		/* 1 */
		if(!$('.autopark__item-1').hasClass('hide_item')){
			$('.autopark__item-1').toggleClass('hide_item');
			$('.autopark__item-4').toggleClass('hide_item');
			return;
		}
		/* 2 */
		if(!$('.autopark__item-2').hasClass('hide_item')){
			$('.autopark__item-2').toggleClass('hide_item');
			$('.autopark__item-4').toggleClass('hide_item');
			return;
		}
		/* 3 */
		if(!$('.autopark__item-3').hasClass('hide_item')){
			$('.autopark__item-3').toggleClass('hide_item');
			$('.autopark__item-4').toggleClass('hide_item');
			return;
		}
		/* 5 */
		if(!$('.autopark__item-5').hasClass('hide_item')){
			$('.autopark__item-5').toggleClass('hide_item');
			$('.autopark__item-4').toggleClass('hide_item');
			return;
		}
	});
	/* 5 */
	$('.autopark__circle-5').click(function (){
		/* 1 */
		if(!$('.autopark__item-1').hasClass('hide_item')){
			$('.autopark__item-1').toggleClass('hide_item');
			$('.autopark__item-5').toggleClass('hide_item');
			return;
		}
		/* 2 */
		if(!$('.autopark__item-2').hasClass('hide_item')){
			$('.autopark__item-2').toggleClass('hide_item');
			$('.autopark__item-5').toggleClass('hide_item');
			return;
		}
		/* 3 */
		if(!$('.autopark__item-3').hasClass('hide_item')){
			$('.autopark__item-3').toggleClass('hide_item');
			$('.autopark__item-5').toggleClass('hide_item');
			return;
		}
		/* 4 */
		if(!$('.autopark__item-4').hasClass('hide_item')){
			$('.autopark__item-4').toggleClass('hide_item');
			$('.autopark__item-5').toggleClass('hide_item');
			return;
		}
	});
});