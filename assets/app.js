$(document).ready(function(){
    $('.menus-toggler').click(function(){
        $(this).toggleClass("active");
        $('.nav-mobile-overlay').toggle();
        $(".nav-menus").toggleClass("active");
    });
});