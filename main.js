$(document).ready(function(){
    $("#images").slick({
        autoplay: true,
    });

    $(".menu").click(function(){
        $("nav").slideToggle()
    })

});