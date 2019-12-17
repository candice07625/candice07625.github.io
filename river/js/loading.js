jQuery(document).ready(function($) {

	'use strict';

/*==========================================================*/
/* Preloader
/*==========================================================*/
	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});
	
	
	
	
	
	$('.icons-a img').click(function() {
        $('#slidecaption,.bar,.footer_1').toggleClass('hd_show hd_hide');
    });
	
	
	$('.team_four img').eq(0).click(function() {
		$('.four_toggle_h1 .item-title , .four_toggle_p .slideshow_caption, .min_pic .four_photo').css('display','none');
		 $('.four_toggle_p .slideshow_caption').eq(0).css('display','block');
		 $('.four_toggle_h1 .item-title').eq(0).css('display','block');
		  $('.min_pic .four_photo').eq(0).css('display','block');
		 
		 
    });
	
		$('.team_four img').eq(1).click(function() {
		$('.four_toggle_h1 .item-title , .four_toggle_p .slideshow_caption, .min_pic .four_photo').css('display','none');
		 $('.four_toggle_p .slideshow_caption').eq(1).css('display','block');
		 $('.four_toggle_h1 .item-title').eq(1).css('display','block');
		 $('.min_pic .four_photo').eq(1).css('display','block');
    });
	
		$('.team_four img').eq(2).click(function() {
		$('.four_toggle_h1 .item-title , .four_toggle_p .slideshow_caption, .min_pic .four_photo').css('display','none');
		 $('.four_toggle_p .slideshow_caption').eq(2).css('display','block');
		 $('.four_toggle_h1 .item-title').eq(2).css('display','block');
		 $('.min_pic .four_photo').eq(2).css('display','block');
    });
	
		$('.team_four img').eq(3).click(function() {
		$('.four_toggle_h1 .item-title , .four_toggle_p .slideshow_caption, .min_pic .four_photo').css('display','none');
		 $('.four_toggle_p .slideshow_caption').eq(3).css('display','block');
		 $('.four_toggle_h1 .item-title').eq(3).css('display','block');
		 $('.min_pic .four_photo').eq(3).css('display','block');
    });
	
	
	












	$('.team_four .op_mobile').eq(0).click(function() {
		$('.mobile_column_1 div').css('display','block');
		$('.mobile_column_2 div').css('display','none');
		$('.mobile_column_3 div').css('display','none');
		$('.mobile_column_4 div').css('display','none');
		 
		 
    });
	
		$('.team_four .op_mobile').eq(1).click(function() {
			$('.mobile_column_2 div').css('display','block');
			$('.mobile_column_1 div').css('display','none');
			$('.mobile_column_3 div').css('display','none');
			$('.mobile_column_4 div').css('display','none');
    });
	
		$('.team_four .op_mobile').eq(2).click(function() {
		    $('.mobile_column_3 div').css('display','block');
			$('.mobile_column_1 div').css('display','none');
			$('.mobile_column_2 div').css('display','none');
			$('.mobile_column_4 div').css('display','none');
    });
	
		$('.team_four .op_mobile').eq(3).click(function() {
		    $('.mobile_column_4 div').css('display','block');
			$('.mobile_column_1 div').css('display','none');
			$('.mobile_column_2 div').css('display','none');
			$('.mobile_column_3 div').css('display','none');
    });









});(jQuery);