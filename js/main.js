$(function (){
    $('.offer-content a').click(function(){
       $('.triangels').css('width', '300px'); 
    });
    $('.logo').click(function(){
        $('.offer-content h1').css('font-size','15px');
    });
    $('.menu li a').click(function(){
        $(this).toggleClass('active');
    });

});