/*------------------------------------------------------------------
Project:        Hotelica-One Page Hotel Responsive Template
Author:         CN-InfoTech
Author URL:     https://themeforest.net/user/cn-infotech
Version:        1.1
-------------------------------------------------------------------*/

(function($){
    
    "use strict";

    	/* Fix for older browsers */
		if (!Array.prototype.indexOf) {
		    Array.prototype.indexOf = function(obj, start) {
		         for (var i = (start || 0), j = this.length; i < j; i++) {
		             if (this[i] === obj) { return i; }
		         }
		         return -1;
		    }
		}

        /* WOW plugin triggers animation.css on scroll
        ================================================== */
        var wow = new WOW({
            boxClass:     'wow', // animated element css class (default is wow)
            offset:       200,   // distance to the element when triggering the animation (default is 0)
            mobile:       false  // trigger animations on mobile devices (true is default)
		});
	
		/***************************************************************************/
		/* Flex slider */
		/***************************************************************************/

		//testimonal slider
		$('.testimonial-slider').flexslider({
			animation: "slide",
			slideshow: false,
			useCSS : false,
			prevText: "",
			nextText: "",    
			animationLoop: true 	
		});
		
		//package slider
		$('.package-slider').flexslider({
			animation: "slide",
			slideshow: false,
			useCSS : false,
			prevText: "",
			nextText: "",    
			animationLoop: true 	
		});
		
		$('#mainFlexSlider').flexslider(
			{
				animation: 'fade',
				slideshow: true,
				pauseOnHover: true,  
				controlNav: false,
				prevText: "<i class='fa fa-chevron-left'></i>", //String: Set the text for the "previous" directionNav item
				nextText: "<i class='fa fa-chevron-right'></i>", 
			}
		);
		
		$(document).on( 'click', '#back-to-top, .back-to-top',function(){
			$('html, body').animate({ scrollTop:0 }, '500');
			return false;
		});
		/* ------------------------------------------------------------------------ */
		/* CUSTOM SELECT
		/* ------------------------------------------------------------------------ */
		
		$('select.styled-select').customSelect();


		
		/* ------------------------------------------------------------------------ */
		/* DATE PICKER
		/* ------------------------------------------------------------------------ */
		
		var selector_datepicker = $('.form-control[data-provide="datepicker"]');
		if ( selector_datepicker.length > 0 ) {
			selector_datepicker.datepicker().on('show', function(e){
				$('.datepicker').css('min-width', $(this).outerWidth() );
			});
		}
		
		/* Counter
        ================================================== */
        $('.counter').each(function(){
            var counter = $(this).data('counter');
            var $this = $(this);
            $this.waypoint(function(direction) {
                if( !$(this).hasClass('animated') ) {    
                    $(this).countTo({
                        from: 0,
                        to: counter,
                        speed: 2000,
                        refreshInterval: 100,
                        onComplete: function() {
                            $(this).addClass('animated');
                        }
                    });
                }
            } , { offset: '100%' } );
        });

        /* PARALAX
        ================================================== */
        if( !device.tablet() && !device.mobile() ) {

        	var data_parallax = $('section[data-type="parallax"]');
            data_parallax.each(function(){
                $(this).parallax("50%", 0.4);
            });

            /* fixed background on mobile devices */
            data_parallax.each(function(index, element) {
                $(this).addClass('fixed');
            });
                
        }

        /*======= Main Slider Init =========*/

	    var interleaveOffset = 0.5;
	    var swiperOptions = {
	        loop: true,
	        speed: 1000,
	        grabCursor: true,
	        watchSlidesProgress: true,
	        mousewheelControl: true,
	        keyboardControl: true,
	        navigation: {
	            nextEl: ".swiper-button-next",
	            prevEl: ".swiper-button-prev"
	        },
	        on: {
	            progress: function() {
	              var swiper = this;
	              for (var i = 0; i < swiper.slides.length; i++) {
	                var slideProgress = swiper.slides[i].progress;
	                var innerOffset = swiper.width * interleaveOffset;
	                var innerTranslate = slideProgress * innerOffset;
	                swiper.slides[i].querySelector(".slide-inner").style.transform =
	                  "translate3d(" + innerTranslate + "px, 0, 0)";
	              }
	            },
	            touchStart: function() {
	              var swiper = this;
	              for (var i = 0; i < swiper.slides.length; i++) {
	                swiper.slides[i].style.transition = "";
	              }
	            },
	            setTransition: function(speed) {
	                var swiper = this;
	                for (var i = 0; i < swiper.slides.length; i++) {
	                    swiper.slides[i].style.transition = speed + "ms";
	                    swiper.slides[i].querySelector(".slide-inner").style.transition =
	                    speed + "ms";
	                }
	            }
	        }
	    };
	    var swiper = new Swiper(".swiper-container", swiperOptions);


	     /*======= Banner Resize with window size =========*/

	    // $window.on( 'resize', function () {
	    //     var bodyheight = $(this).height();
	    //     $("#mt_banner").height(bodyheight);
	    // }).resize();
			

		/*======== Parallax Backgrounds =========*/

	    $("#mt_banner").parallax("50%", 0);
    	
	
	/* Count To Function
    ================================================== */
    $.fn.countTo = function (options) {
        options = options || {};
        
        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
            }, options);
            
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;
            
            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            
            $self.data('countTo', data);
            
            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            
            // initialize the element with the starting value
            render(value);
            
            function updateTimer() {
                value += increment;
                loopCount++;
                
                render(value);
                
                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }
                
                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }
            
            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };
    
    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };
    
    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }


	$("#contactform").validate({			
		submitHandler: function() {
			
			$.ajax({
				url : 'mail/contact.php',
				type : 'POST',
				data : {
					name : $('input[name="full_name"]').val(),
					email : $('input[name="email"]').val(),
					phone : $('input[name="phone"]').val(),
					comments : $('textarea[name="comments"]').val(),
				},
				success : function( result ){
					$('#contactform-error-msg').html( result );
					$("#contactform")[0].reset();
				}			
			});

		}
	});

	  
	
		
	
	/* ------------------------------------------------------------------------ */
	/* NEWSLETTER VALIDATOR
	/* ------------------------------------------------------------------------ */
	$('#newsLetterForm').bootstrapValidator({
		message: 'This value is not valid',
		//live: 'submitted',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		submitHandler: function(validator, form) {
			// validator is the BootstrapValidator instance
			// form is the jQuery object present the current form
			form.find('.alert').html('Thanks for signing up. Now you can sign in as ' + validator.getFieldElements('conactName').val()).show();
		},
		fields: {
			email: {
				validators: {
					notEmpty: {
						message: 'The email address is required and can\'t be empty'
					},
					emailAddress: {
						message: 'The input is not a valid email address'
					}
				}
			}
		}
	});
	

	/* ------------------------------------------------------------------------ */
	// Multiple Sticky Menu
	/* ------------------------------------------------------------------------ */

	var stickyHeaders = (function() {
		var $window = $(window),
				$stickies;

		var load = function(stickies) {

			if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

				$stickies = stickies.each(function() {

					var $thisSticky = $(this).wrap('<div class="multi-menu" />');
		
					$thisSticky
							.data('originalPosition', $thisSticky.offset().top)
							.data('originalHeight', $thisSticky.outerHeight())
								.parent()
								.height($thisSticky.outerHeight()); 			  
				});

				$window.off("scroll.stickies").on("scroll.stickies", function() {
				_whenScrolling();		
				});
			}
		};

		var _whenScrolling = function() {

			$stickies.each(function(i) {			

				var $thisSticky = $(this),
						$stickyPosition = $thisSticky.data('originalPosition');

				if ($stickyPosition <= $window.scrollTop()) {        
					
					var $nextSticky = $stickies.eq(i + 1),
							$nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

					$thisSticky.addClass("fixed");

					if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

						$thisSticky.addClass("absolute").css("top", $nextStickyPosition);
					}

				} else {
					
					var $prevSticky = $stickies.eq(i - 1);

					$thisSticky.removeClass("fixed");

					if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

						$prevSticky.removeClass("absolute").removeAttr("style");
					}
				}
			});
		};

		return {
			load: load
		};
	})();

	stickyHeaders.load($(".multiple-sticky"));

	// Cache selectors
	var lastId,
    topMenu = $("#multiple-sticky-menu"),
    topMenuHeight = topMenu.outerHeight()+40,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.on( 'click' , function(e){
		var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top-25;
				// offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		$('html, body').stop().animate({ 
				scrollTop: offsetTop
		}, 300);
		e.preventDefault();
	});


	// Bind to scroll
	$(window).on( 'scroll', function(){

		/* ------------------------------------------------------------------------ */
		/* BACK TO TOP 
		/* ------------------------------------------------------------------------ */

		if( $(window).scrollTop() > 500 ){
			$("#back-to-top").fadeIn(200);
		} else{
			$("#back-to-top").fadeOut(200);
		}

		/* ------------------------------------------------------------------------ */
		/* BACK TO TOP 
		/* ------------------------------------------------------------------------ */

		// Get container scroll position
		var fromTop = $(this).scrollTop()+topMenuHeight;
		 
		// Get id of current scroll item
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
				return this;
		});
		
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		 
		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
			.parent().removeClass("active")
			.end().filter("[href=#"+id+"]").parent().addClass("active");
		}                   
	});


	//jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	$('.multiple-items').slick({
	  	infinite: false,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	dots: true,
	  	responsive: [{
      		breakpoint: 768,
      		settings: {
	        	arrows: true,
	        	centerMode: false,
	        	slidesToShow: 2,
	        	dots: false,
	        	infinite: true,
	      	}
    	},
    	{
      		breakpoint: 640,
      		settings: {
        		arrows: true,
        		centerMode: false,
        		slidesToShow: 1,
        		dots: false,
        		infinite: true,
      		}
    	},
     	{
      		breakpoint: 480,
      		settings: {
        		arrows: true,
        		centerMode: false,
        		slidesToShow: 1,
        		dots: false,
        		infinite: true,
      		}		
    	}]
	});

	$('.sec-gallery').slick({
	  	infinite: false,
	  	slidesToShow: 5,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	dots: true,
	  	loops:true,
	  	responsive: [{
      		breakpoint: 992,
      		settings: {
	        	arrows: false,
	        	slidesToShow: 4,
	        	dots: true
	      	}
    	},
    	{
      		breakpoint: 767,
      		settings: {
        		slidesToShow: 2,
        		arrows:false
      		}
    	}]
	});

	$('.testimain').slick({
	  	infinite: false,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	dots: true,
	  	arrows: false,
	  	responsive: [{
      		breakpoint: 768,
      		settings: {
	        	slidesToShow: 2
	      	}
    	},
    	{
      		breakpoint: 640,
      		settings: {
        		slidesToShow: 1
      		}
    	}
     	]
	});

	$('.room-testi').slick({
	  	infinite: false,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	dots: true,
	  	arrows: false,
	  	autoplay:true,
	  	responsive: [{
      		breakpoint: 768,
      		settings: {
	        	slidesToShow: 1
	      	}
    	}
     	]
	});

	$('.roomlisting').slick({
	  	infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	dots: true,
	  	arrows: false
	});

	$('.possible-room').slick({
	  	infinite: true,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	dots: true,
	  	arrows: false,
	  	autoplay:true,
	  	loops:true,
	  	responsive: [
	  	{
      		breakpoint: 768,
      		settings: {
	        	slidesToShow: 2
	      	}
    	},
    	{
      		breakpoint: 639,
      		settings: {
	        	slidesToShow: 1
	      	}
    	}
     	]
	});

	$('.instagram-slide').slick({
	  	infinite: false,
	  	slidesToShow: 7,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	dots: false,
	  	loop:true,
	  	arrows: true,
	  	responsive: [{
      		breakpoint: 768,
      		settings: {
	        	slidesToShow: 2
	      	}
    	},
    	{
      		breakpoint: 640,
      		settings: {
        		slidesToShow: 1
      		}
    	}
     	]
	});



 	$('#myModal').on('shown.bs.modal', function() {

	 	$('.slider-for').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav'
		});

		$('.slider-nav').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});

  	$('#myModal1').on('shown.bs.modal', function() {

		$('.slider-for-1').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav-2'
		});

		$('.slider-nav-1').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for-1',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});
  	$('#myModal2').on('shown.bs.modal', function() {

		$('.slider-for-2').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav-2'
		});

		$('.slider-nav-2').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for-2',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});
  	$('#myModal3').on('shown.bs.modal', function() {

		$('.slider-for-33').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav-3'
		});

		$('.slider-nav-33').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for-3',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});
  	$('#myModal4').on('shown.bs.modal', function() {

		$('.slider-for-4').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav-2'
		});

		$('.slider-nav-4').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for-4',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});
        $('#myModal-pkg1').on('shown.bs.modal', function() {

		$('.slider-for-pkg1').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav-pkg1'
		});

		$('.slider-nav-pkg1').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for-pkg1',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});
        $('#myModal-pkg2').on('shown.bs.modal', function() {

		$('.slider-for-pkg2').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav-pkg2'
		});

		$('.slider-nav-pkg2').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for-pkg2',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});
         $('#myModal-pkg3').on('shown.bs.modal', function() {

		$('.slider-for-pkg3').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav-pkg3'
		});

		$('.slider-nav-pkg3').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for-pkg3',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});
         $('#myModal-pkg4').on('shown.bs.modal', function() {

		$('.slider-for-pkg4').slick({
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	arrows: false,
		  	fade: true,
		  	asNavFor: '.slider-nav-pkg4'
		});

		$('.slider-nav-pkg4').slick({
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	asNavFor: '.slider-for-pkg4',
		  	dots: false,
		  	centerMode: true,
		  	focusOnSelect: true,
		  	arrows: true
		});

 	});

   	$('.slider-for-3').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
	  	asNavFor: '.slider-nav-3'
	});

	$('.slider-nav-3').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	asNavFor: '.slider-for-3',
	  	dots: false,
	  	centerMode: true,
	  	focusOnSelect: true,
	  	arrows: true,
	  	variableWidth: true
	});

	$('.room-big').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
	  	dots:false,
	  	autoplay:true,
	  	asNavFor:'.room-thumbnail'
	});

	$('.room-thumbnail').slick({
	  	slidesToShow: 5,
	  	slidesToScroll: 1,
	  	asNavFor: '.room-big',
	  	autoplay:true,
	  	dots: false,
	  	centerMode: true,
	  	focusOnSelect: true,
	  	arrows: true,
	  	responsive: [{
      		breakpoint: 767,
      		settings: {
	        	slidesToShow: 3
	      	}
    	}
     	]
	});

  	/**
	* Main Menu Slide Down Effect
	*/

	// Mouse-enter dropdown
	$('#navbar li').on("mouseenter", function() {
		$(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
	});
	// Mouse-leave dropdown
	$('#navbar li').on("mouseleave", function() {
		$(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
	});
	
	
	/**
	 * Slicknav - a Mobile Menu
	 */
	var $slicknav_label;
	$('#responsive-menu').slicknav({
		duration: 500,
		easingOpen: 'easeInExpo',
		easingClose: 'easeOutExpo',
		closedSymbol: '<i class="fa fa-plus"></i>',
		openedSymbol: '<i class="fa fa-minus"></i>',
		prependTo: '#slicknav-mobile',
		allowParentLinks: true,
		label:"" 
	});

	/**
	 * Smooth scroll to anchor
	 */
	$('a.anchor[href*=#]:not([href=#])').on("click",function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 70) // 70px offset for navbar menu
				}, 1000);
				return false;
			}
		}
	});

	/**
	 *  Arrow for Menu has sub-menu
	 */
	if ($(window).width() > 992) {
		$(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
	}
		

	/**
	 * Slick-Slider
	 */

	$('.one-time').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});

	/**
	 * ion Range Slider for price and star rating range slider
	 */
	$("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true
        });
	
		
})(jQuery);