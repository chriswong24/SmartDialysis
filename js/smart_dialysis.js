"use strict";

$(document).ready(function(){
	$('#navlinks').on('activate.bs.scrollspy', function(){
		var newtarget = $(this).find('li.active > a');
	});

	$('a.hashScroll').click(function (event) {
        event.preventDefault();
        //calculate destination place
        var dest = 0;

        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        
        if (dest < 100)
            dest = 0;
        
        //go to destination
        $('html,body').animate({
            scrollTop: dest-$('.navbar').height()/2
        }, 750, 'swing');
        
        //refresh scrollspy
        $('body').scrollspy('refresh');
    });

	setLandingSize();
	$(window).resize(setLandingSize);

});

function setLandingSize(){
	var landing_height = $(window).height() - 80;
	var section_height = landing_height + 60;	

	//$('#landing').css('height', landing_height);
	$('#about').css('height', section_height);
	$('#product').css('height', section_height);
	$('#technology').css('height', section_height);
	$('#team').css('height', section_height*1.5);
	$('#contact').css('height', section_height);

	//Center the description
	var description = $('.landing_center');
	var margins = landing_height - description.height();
	description.css('margin-top', margins/2);

	//Adjust Padding
	var header_padding = $('#landing h1').css('padding');
	var padding_ratio = header_padding / landing_height;
	var adjusted_padding = landing_height * padding_ratio;
	$('#landing h1').css('padding', adjusted_padding); 

	//Adjust images
	var techimg_height = section_height/2;
	$('.image_container').css('height', techimg_height);

	var teamimg_dim = section_height/4.945;
	var teamimage = $('.team_image');
	teamimage.css('height', teamimg_dim);
	teamimage.css('width', teamimg_dim);

	// Resize pillars
    var max = 0;
    $('.pillars div.tab-pane').each(function() {
        if ($(this).height() > max)
            max = $(this).height()
    });
    $('.pillars div.tab-pane').height(max);
}