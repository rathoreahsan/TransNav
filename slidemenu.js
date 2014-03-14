// JavaScript Document

/*=======================================================================================================*//*

	Horizontal Menu with Next/Previous Buttons Using CSS3 Animations
	Supported Browsers: Internet Explorer 10+, Chrome, Firefox, Safari
	Fallback Solution for: Below Internet Explorer 9 and Opera
	Code By: 
	Lead. UI Developer, 
	A.K.

*//*=======================================================================================================*/

var transform = 0;

/*====================================== Load Item Function Begins ========================================*/

function loadItems() {
	//On Load Position Items			
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
		var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
		if (ieversion<=8) {
			loadItemsBelowIE8()
		} else {
			loadItemsInGoodBrowsers()
		}
	} else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
		loadItemsInFirefox();
	} else {
		loadItemsInGoodBrowsers()
	}
}

/*======================================== Load Item Function Ends =========================================*/

/*============================== Load Items In Good Browsers Function Begins ===============================*/

function loadItemsInGoodBrowsers() {
	$('.frame ul li').each(function(){
		$(this).css({
			'-webkit-transform' : 'translateX(' + transform + 'px)',
			'-moz-transform' : 'translateX(' + transform + 'px)',
			'-ms-transform' : 'translateX(' + transform + 'px)',
			'transform' : 'translateX(' + transform + 'px)',
		});
		transform += 187;
	});
}

/*============================== Load Items In Good Browsers Function Ends ===============================*/

/*================================== Load Items Firefox Function Begins ==================================*/

function loadItemsInFirefox() {
	$('.frame ul li').each(function(){
		$(this).css({
			'-moz-transform' : 'translateX(' + transform + 'px)',
			'transform' : 'translateX(' + transform + 'px)',
			'width'	 : '177px'
		});
		transform += 187;
	});
	$('#next, #prev').css({
		'height'		:	'81px',
		'line-height' 	: 	'81px'
	})
}

/*================================== Load Items Firefox Function Ends ====================================*/

/*============================== Load Items IE8 And Below Function Begins ================================*/

function loadItemsBelowIE8() {
	$('.frame ul li').each(function(){
		$(this).css({
			'left' : transform + 'px'
		});
		transform += 187;
	});
}

/*=============================== Load Items IE8 And Below Function Ends ================================*/


/*======================================== Next Function Begins =========================================*/

function next(event){
	var from = 0,
	to = 0,
	delay = 0.1;
	
	if( $('.frame ul li').length == 12 ){
		to = -1122;
	} else if( $('.frame ul li').length == 11 ){
		to = -935;
	} else if( $('.frame ul li').length == 10 ){
		to = -748;
	} else if( $('.frame ul li').length == 9 ){
		to = -561;
	}  else if( $('.frame ul li').length == 8 ){
		to = -374;
	}  else if( $('.frame ul li').length == 7 ){
		to = -187;
	} 
	
	$(".frame style").remove();
	
	$('.frame ul li').each(function(index){
		
		applyStyle($(this), index, delay, event)
		delay = (delay + 0.035); 
		animRules(index, from, to, event);
		from += 187;
		to += 187;
	});
} // End of Function Next

/*======================================== Next Function Ends =========================================*/

/*====================================== Previous Function Begins =====================================*/

function previous(event) {
	
	var from = 0,
	to = 0,
	delay= 0.43;
	
	if( $('.frame ul li').length == 12 ){
		from = -1122;
	} else if( $('.frame ul li').length == 11 ){
		from = -935;
	} else if( $('.frame ul li').length == 10 ){
		from = -748;
	} else if( $('.frame ul li').length == 9 ){
		from = -561;
	}  else if( $('.frame ul li').length == 8 ){
		from = -374;
	}  else if( $('.frame ul li').length == 7 ){
		from = -187;
	}	
			
	$(".frame style").remove();
		
	$('.frame ul li').each(function(index){
		
		applyStyle($(this), index, delay, event)
		delay = (delay - 0.03); 
		animRules(index, from, to, event);
		from += 187;
		to += 187;
			
	});
} // End of Function Previous

/*==================================== Previous Function Ends =====================================*/

/*================================== Apply Style Function Begins ==================================*/

function applyStyle(el, index, delay, evt){
	
	var elId = evt.target.id;
	
	if(elId == 'next') {
		el.css({
			'-webkit-animation-name' : 'anim' + index,
			'-webkit-animation-duration' : delay + 's',
			'-webkit-animation-iteration-count' : 1,
			'-webkit-animation-timing-function' : 'ease-in-out',
			'-webkit-animation-fill-mode' : 'both',
			'-moz-animation-name' : 'anim' + index,
			'-moz-animation-duration' : delay + 's',
			'-moz-animation-iteration-count' : 1,
			'-moz-animation-timing-function' : 'ease-in-out',
			'-moz-animation-fill-mode' : 'both',
			'-ms-animation-name' : 'anim' + index,
			'-ms-animation-duration' : delay + 's',
			'-ms-animation-iteration-count' : 1,
			'-ms-animation-timing-function' : 'ease-in-out',
			'-ms-animation-fill-mode' : 'both',
			'animation-name' : 'anim' + index,
			'animation-duration' : delay + 's',
			'animation-iteration-count' : 1,
			'animation-timing-function' : 'ease-in-out',
			'animation-fill-mode' : 'both'
		});
	} else { 
		el.css({
			'-webkit-animation-name' : 'animm' + index,
			'-webkit-animation-duration' : delay + 's',
			'-webkit-animation-iteration-count' : 1,
			'-webkit-animation-timing-function' : 'ease-in-out',
			'-webkit-animation-fill-mode' : 'both',
			'-moz-animation-name' : 'animm' + index,
			'-moz-animation-duration' : delay + 's',
			'-moz-animation-iteration-count' : 1,
			'-moz-animation-timing-function' : 'ease-in-out',
			'-moz-animation-fill-mode' : 'both',
			'-ms-animation-name' : 'animm' + index,
			'-ms-animation-duration' : delay + 's',
			'-ms-animation-iteration-count' : 1,
			'-ms-animation-timing-function' : 'ease-in-out',
			'-ms-animation-fill-mode' : 'both',
			'animation-name' : 'animm' + index,
			'animation-duration' : delay + 's',
			'animation-iteration-count' : 1,
			'animation-timing-function' : 'ease-in-out',
			'animation-fill-mode' : 'both'
		});
	}	
}

/*=================================== Apply Style Function Ends ====================================*/

/*================================ Animation Rules Function Begins =================================*/

function animRules(index, from, to, evt){
	
	var elId = evt.target.id;
	
	if(elId == 'next') {
		$('.frame').append('<style id=anim' + index + '>' +
			'@-webkit-keyframes anim' + index + ' { ' +
				'0% { width: 183px; -webkit-transform : translate(' + from + 'px) } 50% { width: 200px; } 100% { width: 183px; -webkit-transform: translate(' + to + 'px) }' +
			'}' +
			'@-moz-keyframes anim' + index + ' { ' +
				'0% { width: 177px; -moz-transform : translate(' + from + 'px) } 50% { width: 200px; } 100% { width: 177px; -moz-transform: translate(' + to + 'px) }' +
			'}' +
			'@-ms-keyframes anim' + index + ' { ' +
				'0% { width: 183px; -ms-transform : translate(' + from + 'px) } 50% { width: 200px; } 100% { width: 183px; -ms-transform: translate(' + to + 'px) }' +
			'}' +
			//'@keyframes anim' + index + ' { ' +
				//'0% { width: 183px; transform : translate(' + from + 'px) } 50% { width: 200px; } 100% { width: 183px; transform: translate(' + to + 'px) }' +
			' } ' +
		'</style>' );
	} else {
		$('.frame').append('<style id=animm' + index + '>' +
			'@-webkit-keyframes animm' + index + '{' +
				'0% { width: 183px; -webkit-transform : translate(' + from + 'px) } 50% { width: 200px; } 100% { width: 183px; -webkit-transform: translate(' + to + 'px) }' +
			' } ' +
			'@-moz-keyframes animm' + index + '{' +
				'0% { width: 177px; -moz-transform : translate(' + from + 'px) } 50% { width: 200px; } 100% { width: 177px; -moz-transform: translate(' + to + 'px) }' +
			' } ' +
			'@-ms-keyframes animm' + index + '{' +
				'0% { width: 183px; -ms-transform : translate(' + from + 'px) } 50% { width: 200px; } 100% { width: 183px; -ms-transform: translate(' + to + 'px) }' +
			' } ' +
			//'@keyframes animm' + index + ' { ' +
				//'0% { width: 183px; transform : translate(' + from + 'px) } 50% { width: 200px; } 100% { width: 183px; transform: translate(' + to + 'px) }' +
			' } ' +
		'</style>' );
	}
	
	return true;
}

/*================================= Animation Rules Function Ends ==================================*/
