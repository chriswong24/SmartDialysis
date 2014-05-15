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

	var background_timer = setTimeout(changeBackground, 8000);


	//Change background picture
   	$('#carousel-prev').click(changeBackgroundClick);
   	$('#carousel-next').click(changeBackgroundClick);


   	//Dialog boxes
   	$('.popup').dialog({autoOpen: false});

   	//Opens dialog box
   	$('#team_adam').click(function(){
   		$('#adam_popup').dialog('open');
   	});



});



function resize(){
	var window_width = $(window).width();
}

function setLandingSize() {
    var landingheight = $(window).height() - 80;
    var sectionheight = landingheight + 20;
    $('#landing').css('height', landingheight);
    $('#about').css('min-height', sectionheight);
    $('#vision').css('min-height', sectionheight);
    $('#technology').css('min-height', sectionheight);
    $('#team').css('min-height', sectionheight);
    $('#partners').css('min-height', sectionheight);
    $('#contact').css('min-height', sectionheight);


    
    /*// center the play button
    var center = $('.landing-center');
    var dblmargin = sectionheight - controls.height();
    controls.css('margin-top', dblmargin/2);
    */

    if($(window).width() < 768){
		$('#landing h1').css('font-size', 40);
	}
	if($(window).width > 769){
		$('#landing h1'.css('font-size', 48));
	}

	if($(window).height < 490){
		$('#landing h2').html("");
	}

	if($(window).height > 491){
		$('#landing h2').html("Portable, Convenient, Safe,<br/> Smart")
	}
    
    //Resize images
	var techimg_height = $(window).width()/4.45296167	;
	var techimg_width = techimg_height * 1.7;
	$('#technology img').css('height', techimg_height);
	$('#technology img').css('width', techimg_width);

	var generation_width = $('.generation').width() *0.9;
	//var adjusted_generation_height = $(window).width() / 1.51;
	$('.generation img').css('width', generation_width);
	$('.generation img').css('height', generation_width);

    // Resize pillars
    var max = 0;
    $('.pillars div.tab-pane').each(function() {
        if ($(this).height() > max)
            max = $(this).height()
    });
    $('.pillars div.tab-pane').height(max);

}

function setSectionSize(){
	var sectionheight = $(window).height() - 80;
	$('#about').css('min-height', sectionheight);
}

function changeBackgroundClick(){
	if($('#landing').hasClass('background_1')){
		$('#landing').addClass('background_2').removeClass('background_1');
	}
	else if($('#landing').hasClass('background_2')){
		$('#landing').addClass('background_1').removeClass('background_2');
	}
}

function changeBackground(){

	setTimeout(changeBackground, 8000);

	if($('#landing').hasClass('background_1')){
		$('#landing').addClass('background_2').removeClass('background_1');
	}
	else if($('#landing').hasClass('background_2')){
		$('#landing').addClass('background_1').removeClass('background_2');
	}

}






