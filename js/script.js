$(document).ready(function() {
    $('.checkbtn').on('click',function(){
        $('.menu').toggleClass('showing');
        $('.checkbtn').toggleClass('fa-bars');
        $('.checkbtn').toggleClass('fa-times');
    });
});