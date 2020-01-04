$(document).ready(function () {

$(function() {
        $(".lazy").lazy()
    })

$(function() {
        $(".navbar-nav .nav-link, .apply-now a").bind("click", function(e) {
            var a = $(this);
            $("html, body").stop().animate({
                scrollTop: $(a.attr("href")).offset().top - 0
            }, 1500, "easeInOutExpo"), e.preventDefault()
            $("#navbarResponsive li a").removeClass('active');
            $(this).addClass('active');
        })
    })

$("#field3").mask("(999) 999-9999");

});

