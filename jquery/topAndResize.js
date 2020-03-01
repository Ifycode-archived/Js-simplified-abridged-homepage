$(function() {

    $('html, body').animate({
        'scrollTop': '0'
    }, 500, 'swing');

    $('.arrow').on( 'click', function(e) {
        e.preventDefault();

    $('html, body').animate({
        'scrollTop': '0'
    }, 500, 'swing');
    });
    
    $(window).scroll(function(){
        
        if ( $(this).scrollTop() > 200 ){
            $('.arrow').fadeIn();
            $('.arrow').css({
                'opacity' : '0.85',
            });
    
        }
    
        else {
           $('.arrow').fadeIn();
            $('.arrow').css({
                'opacity' : '0'
            });
        }
        
    });


    

   
});
 
