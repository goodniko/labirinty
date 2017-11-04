// $(function () {
// 	var $page = $('html, body');
// 	$('a[href*="#"]').click(function () {
// 		$page.animate({
// 			scrollTop: $( $.attr(this, 'href') ).offset().top - 95
// 		}, 800);
// 		return false;
// 	});
// });

$(document).ready(function() {
	$(".menu-link").on("click", function() {
			$("html, body").stop().animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top - 95
			}, 800),
			$(".nav").removeClass("act"),
			event.preventDefault()
	}),
	$(".menuBtn").on("click", function() {
			$(".nav").toggleClass("act")
	});
});


// $(function () {
// 	$(document).ready(function () {
// 		// menu click event
// 		$('.menuBtn').click(function () {
// 			$(this).toggleClass('act');
// 			if ($(this).hasClass('act')) {
// 				$('.nav').addClass('act');

// 			}
// 			else {
// 				$('.nav').removeClass('act');
// 			}

// 		});

// 	});
// });




( function( window ) {

	'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;

	if ( 'classList' in document.documentElement ) {
	  hasClass = function( elem, c ) {
		return elem.classList.contains( c );
	  };
	  addClass = function( elem, c ) {
		elem.classList.add( c );
	  };
	  removeClass = function( elem, c ) {
		elem.classList.remove( c );
	  };
	}
	else {
	  hasClass = function( elem, c ) {
		return classReg( c ).test( elem.className );
	  };
	  addClass = function( elem, c ) {
		if ( !hasClass( elem, c ) ) {
		  elem.className = elem.className + ' ' + c;
		}
	  };
	  removeClass = function( elem, c ) {
		elem.className = elem.className.replace( classReg( c ), ' ' );
	  };
	}

	function toggleClass( elem, c ) {
	  var fn = hasClass( elem, c ) ? removeClass : addClass;
	  fn( elem, c );
	}


	var classie = {
	  // full names
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  // short names
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};

	// transport
	if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( classie );
	} else {
	  // browser global
	  window.classie = classie;
	}

	})( window );
