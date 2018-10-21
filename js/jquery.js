$(function(){
    var winh = $(window).height();
    var navh = $(".navbar").innerHeight();
    $(".slider, .carousel-item").height(winh);
    
    
    //navbar trigger
    $(window).on("scroll", function(){
        var scrtop = $(window).scrollTop();
        if(scrtop >=100)
            {
                $(".navbar").removeClass("fixed-top").addClass("sticky-top");
                $(".navbar").css("background-color", "#fff");
                $(".navbar-light .navbar-nav .nav-link").css("color", "#000");
                $(".navbar .navbar-brand span").first().css("color", "#000");
            }
    });
    
    //go to place when you click on navbar links
    $(".nav-link").on("click", function () {
        $("html , body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000)
    });
    
    //show font awesome
    $(window).on("scroll" ,function(){
         var scrtopp = $(window).scrollTop();
        if(scrtopp >=800){
            $(".your-services i").fadeIn(2000);
        }
        else{
            $(".your-services i").fadeOut(2000);
        }
    });
    
    //show download icon
    $(window).on("scroll" ,function(){
         var x= $(window).scrollTop();
        console.log(x);
        if(x >=1750){
            $(".download a").delay(500).fadeIn(3000);
        }
        else{
            $(".download a").fadeOut(3000);
        }
    });
   
    
});