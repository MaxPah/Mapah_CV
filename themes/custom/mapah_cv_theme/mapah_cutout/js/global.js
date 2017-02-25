/**
 * Created by maxim on 05/12/2016.
 */

(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $("header").addClass("is-not-top");
        } else {
            $("header").removeClass("is-not-top");
        }
        if (scroll < 2) {
            $('.menu-item-cv').removeClass('active');
        }
    });

    $(document).ready(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - $('header .navbar').outerHeight()
                    }, 1000);
                    return false;
                }
            }
        });


        $('.menu-item-cv a').on('click', function() {
            $('.menu-item-cv').removeClass('active');
            //$(this).parent('li').addClass('active');
            var anchor = $(this).parent('li').data('anchor');
            $('a[href="' + anchor + '"').parent('li').addClass('active');
        });
        $('.menu-title-wrapper .rough-title').on('click', function () {
            $('header .navbar li').removeClass('active');
        });

        $('.menu-item-cv.home a').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 2000);
            return false;
        });



        $('.experiences-item.flip-container').on('click', function () {
           $(this).toggleClass('hover');
        });
    });

})( jQuery );
