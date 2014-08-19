$(document).ready(function() {
    $('.countdown').countdown();

    if ($.fn.cssOriginal!=undefined) {
        $.fn.css = $.fn.cssOriginal;
    }

    $('.fullwidthbanner').revolution({    
        delay: 9000,                                                
        startheight: 800,                            
        startwidth: 1170,
        
        hideThumbs:200,
        
        thumbWidth:100,                            
        thumbHeight:50,
        thumbAmount:5,
        
       navigationType:"bullet",               
       navigationArrows:"nexttobullets",      
       navigationStyle:"round",               
                                    
       navigationHAlign:"center",             
       navigationVAlign:"bottom",                 
       navigationHOffset: 0,
       navigationVOffset: 50,
        
       soloArrowLeftHalign:"left",
       soloArrowLeftValign:"center",
       soloArrowLeftHOffset:20,
       soloArrowLeftVOffset:0,
        
       soloArrowRightHalign:"right",
       soloArrowRightValign:"center",
       soloArrowRightHOffset:20,
       soloArrowRightVOffset:0,
        touchenabled:"on",                      
        onHoverStop:"on",                        
        
        navOffsetHorizontal:0,
        navOffsetVertical:20,
        
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        hideSliderAtLimit:0,
        
        stopAtSlide:-1,
        stopAfterLoops:-1,    
        shadow: 0,
        fullWidth: 'off'    
    });

    
    $('.parallax-first').parallax("50%", 0.05);
    $('.parallax-second').parallax("50%", 0.05);
    $('.parallax-third').parallax("50%", 0.05);

	$('a[data-toggle="tab"]').on('shown', function (e) {});

	$('input, textarea').placeholder();
	
	$('.cycle-slideshow-main').cycle({
		fx: 'scrollHorz',
		timeout: 40000,
		slides: '.slide'
	});

    $('.cycle-slideshow-main').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
        var class_name = $(incomingSlideEl).attr('id');
        var old_class_name = $(outgoingSlideEl).attr('id');
        $('.cycle-slideshow-main .cycle-overlay').removeClass(old_class_name).addClass(class_name);
    });

	$('.cycle-slideshow-fade').cycle({
		fx: 'fade',
		timeout: 4000,
		slides: '.slide'
	});
	
	$('.cycle-slideshow-vertical').cycle({
		fx: 'scrollVert',
		timeout: 8000,
		slides: '.slide',
        pager: '.cycle-vertical-pager'
	});
	
	$('.navigation .nav a[href^="#"], a[href^="#"].roll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

    $("a[href$='jpg']").fancybox();
    $("a[href$='png']").fancybox();
    $("a[href$='gif']").fancybox();

    $('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {}
        }
    });



});