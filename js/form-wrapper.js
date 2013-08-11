/**
 * Created with JetBrains PhpStorm.
 * User: Egor
 * Date: 11.08.13
 * Time: 23:01
 * To change this template use File | Settings | File Templates.
 */

$(function () {
    $('.form-wrapper').bind('mousewheel', function (event, delta) {
        if (delta == 1) {
            this.scrollLeft -= 15;
        }
        else {
            this.scrollLeft += 15;
        }
    });

    $('.form-wrapper').bind('scroll', function(){
        if(this.scrollLeft==0) $(".arrows .left").fadeOut();
        else $(".arrows .left").fadeIn();

        if(this.scrollLeft>=9000) $(".arrows .right").fadeOut();
        else $(".arrows .right").fadeIn();
/*        console.log(this.scrollLeft);*/
        if(this.scrollLeft>1750 && this.scrollLeft<3350){
            $(".cow-bg").fadeIn(400);
            $(".new-grass").fadeIn(400);
            $(".line").fadeIn(400);

        }
        else {$(".cow-bg").fadeOut(200);
        $(".new-grass").fadeOut(200);
        $(".line").fadeOut(200);
        }

        parallaxScroll();

    });

        function parallaxScroll(){
            var scrolled = $('.form-wrapper').scrollLeft();
            $('html').css({'background-position': (0-(scrolled*.05))+'px 0px'});
            $('.flower-bg').css({'background-position': (0+(scrolled*.5))+'px 0px'});
            $('.ufo').css({'left': (1200+(scrolled*.5))+'px'});
            $('.cow').css({'left': (4000+(scrolled*.05))+'px'});
        }

})//end of ready