/*
*   Description: ENDLESS
*   Date: Aug 2020
*   Version 2.1.0
*/

/*eslint-disable */

'use strict';

////////////////////////////////////////////
// DOC READY
////////////////////////////////////////////

$(document).ready(function () {
 
 	

	if ($('.feature-single').hasClass('glitch-img-1')) {

		function glitch_1() {
			$('.glitch-img-1').mgGlitch({
		      // set 'true' to stop the plugin
			  destroy : false, 
		      // set 'false' to stop glitching
		      glitch: true, 
		      // set 'false' to stop scaling
		      scale: false, 
		      // set 'false' to stop glitch blending
		      blend : true, 
		      // select blend mode type
		      blendModeType : 'overlay',
		      // set min time for glitch 1 elem
		      glitch1TimeMin : 10, 
		      // set max time for glitch 1 elem
		      glitch1TimeMax : 100,
		      // set min time for glitch 2 elem
		      glitch2TimeMin : 20, 
		      // set max time for glitch 2 elem
		      glitch2TimeMax : 50, 
		       zIndexStart : -1,
			});
		}
		$('.soundfx').get(0).play();
		glitch_1();

		setInterval(function() {
	        $( ".glitch-img-1" ).mgGlitch({
		      destroy : true, 
			});
			clearInterval();
			$('.soundfx').get(0).pause();
	     }, 1000);

		setInterval(function() {
	       	glitch_1();
			clearInterval();
			$('.soundfx').get(0).play();
	     }, 5000);

	}

	else if ($('.feature-single').hasClass('glitch-img-2')) {

		function glitch_2() {
			$('.glitch-img-2').mgGlitch({
		      // set 'true' to stop the plugin 
				  destroy : false, 
			      // set 'false' to stop glitching
			      glitch: true, 
			      // set 'false' to stop scaling
			      scale: true, 
			      // set 'false' to stop glitch blending
			      blend : true, 
			      // select blend mode type
			      blendModeType : 'screen',
			      // set min time for glitch 1 elem
			      glitch1TimeMin : 10, 
			      // set max time for glitch 1 elem
			      glitch1TimeMax : 40,
			      // set min time for glitch 2 elem
			      glitch2TimeMin : 400, 
			      // set max time for glitch 2 elem
			      glitch2TimeMax : 450, 
			       zIndexStart : -1,
			});
		}
		
		glitch_2();

		setInterval(function() {
	        $( ".glitch-img-2" ).mgGlitch({
		      destroy : true, 
			});
			clearInterval();
	     }, 2000);

		setInterval(function() {
	       	glitch_2();
			clearInterval();
	     }, 6000); 


	}

	else if ($('.feature-single').hasClass('glitch-img-3')) {

		function glitch_3() {
			$('.glitch-img-3').mgGlitch({
		      // set 'true' to stop the plugin
		  destroy : false, 
	      // set 'false' to stop glitching
	      glitch: true, 
	      // set 'false' to stop scaling
	      scale: true, 
	      // set 'false' to stop glitch blending
	      blend : true, 
	      // select blend mode type
	      blendModeType : 'darken',
	      // set min time for glitch 1 elem
	      glitch1TimeMin : 320, // set min time for glitch 1 elem
        glitch1TimeMax : 330, // set max time for glitch 1 elem
        glitch2TimeMin : 10, // set min time for glitch 2 elem
        glitch2TimeMax : 30, // set max time for glitch 2 elem
        zIndexStart : -1, // because of absolute position, set z-index base value
			});
		}
		
		glitch_3();

		setInterval(function() {
	        $( ".glitch-img-3" ).mgGlitch({
		      destroy : true, 
			});
			clearInterval();
	     }, 1000);

		setInterval(function() {
	       	glitch_3();
			clearInterval();
	     }, 5000); 

	} 


});
// end doc ready

$(window).resize(function () {

	

	$( ".glitch-event" ).mgGlitch({
      destroy: true,  
	});

	
		
	$( ".glitch-event" ).click(function() {
		console.log('clicked');
		$(this).mgGlitch({
      		destroy: false,  
		});
	});

	if ($('.feature-single').hasClass('glitch-img-1')) {

		$(this).replaceWith("<img sizes=\"(min-width: 800px) 800w, (min-width: 320px) 730w\" srcset=\"images/2019/studio-desktop.jpg 5456w, images/2019/studio-mobile.jpg 730w,\" src=\"images/2019/studio-mobile.jpg\" alt=\"Endless working in studio\" class=\"feature-single glitch-event glitch-img-1\">");
	}

	else if ($('.feature-single').hasClass('glitch-img-2')) {

		$(this).replaceWith("<img sizes=\"(min-width: 800px) 800w, (min-width: 320px) 730w\" srcset=\"images/2019/studio-desktop.jpg 5456w, images/2019/studio-mobile.jpg 730w,\" src=\"images/2019/studio-mobile.jpg\" alt=\"Endless working in studio\" class=\"feature-single glitch-event glitch-img-2\">");
	}

	else if ($('.feature-single').hasClass('glitch-img-3')) {

		$(this).replaceWith("<img sizes=\"(min-width: 800px) 800w, (min-width: 320px) 730w\" srcset=\"images/2019/studio-desktop.jpg 5456w, images/2019/studio-mobile.jpg 730w,\" src=\"images/2019/studio-mobile.jpg\" alt=\"Endless working in studio\" class=\"feature-single glitch-event glitch-img-3\">");
	}
});