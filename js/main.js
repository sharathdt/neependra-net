$(document).ready(function() {


  // Responsive Menu.js
  	$('#nav-wrap').prepend('<div id="menu-icon"><span><img src="img/hamburger@2x.png"/></span>Menu</div>');
  	$("#menu-icon").on("click", function(){
  		$("#nav").slideToggle();
  		$(this).toggleClass("active");
  	});
  	
  	
  // Parent-Nav Hover	
  	$("li.nav-parent").hover(function(){
  		$(this).addClass("hover");
  	
  	}, function(){
  	    $(this).removeClass("hover");
  	});
  	
  	
  
  // FitVid.js
     $(".main-container").fitVids();
   
 
     
  // Fix Widows
  	 $('p').widowFix();   
 
 
 
  // Fancybox.js
	 $('.fancybox').fancybox();
	  
  
  
  // BackStretch.js	 
	 $("#masthead").backstretch("img/masthead@2x.jpg");
	 
	 
	 
  // Mosaic.js		 
	 $('.fade').mosaic();
	 
	 
  
  // FlexSlider.js	 
	 $('.flexslider').flexslider({
	   animation: "fade",
	   smoothHeight: true,
	   touch: true,
	   prevText: "S",
	   nextText: "s",
	   start: function(slider){
	     $('body').removeClass('loading');
	   }
	 });
	 
	 $('.flexslider-quote').flexslider({
	   animation: "fade",
	   smoothHeight: true,
	   touch: true,
	   directionNav: false,
	   start: function(slider){
	     $('body').removeClass('loading');
	   }
	 });	 
	 
	 
});


