$(function () {

    // ajust the height of the image to the secreen height 

    $('.header').height($(window).height());

    $(window).resize(function (){
 
        $('.header').height($(window).height());

    });


    // active link

    $('.navbar .links li ').click( function () {

        $(this).addClass("act").siblings().removeClass('act');

    });
    
//    center vertically the slider's content  
    
    
    $('.bxslider').css('paddingTop', ($(window).height()-$('.bxslider li').height())/2 );

    // trigger bxslider 

    $('.bxslider').bxSlider({
        pager:false
    });

    
     // scroll on click
    
    $('.links li a').click(function () {
        
       $('html,body').animate({
           
           scrollTop: $('#' + $(this).data('value') ).offset().top
           
       },1000);
        
        
    }); 
    
    
    
   // auto slider 
    
(function autoslider() {
    
    $('.slider .active').each(function () {
        
        if(!$(this).is(':last-child')) {
            
            $(this).delay(3000).fadeOut(1000,function () {
                
               $(this).removeClass('active').next().addClass('active').fadeIn();
               autoslider();
                
            }); 
            
        } else {
            
           $(this).delay(3000).fadeOut(1000,function () {
                
               $(this).removeClass('active');
               $('.slider div').eq(0).addClass('active').fadeIn(1000);
               autoslider();
                
            }); 
            
        }
        
    });
    
    
    
}());
    
    
    
    
    // mix
    
    var mixer = mixitup('.mixcont');
    
    var mixer = mixitup(containerEl);
    
    
    var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
    
    
    // nicescroll
    
$('html').niceScroll({
    
    cursorcolor:'#1abc9c',
    cursorwidth:8, 
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    

});