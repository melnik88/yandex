/**
 * Created with JetBrains PhpStorm.
 * User: Egor
 * Date: 11.08.13
 * Time: 22:58
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    /*TODO: написать вначале клик на arrow, потом разобраться на кого нажаль, потом сдвигать влево-вправо*/
    $(".arrows .left").click(function(){
        $('.form-wrapper').scrollTo({top:'', left:'-=1000'}, 800);
    });//end of click

    $(".arrows .right").click(function(){
        $('.form-wrapper').scrollTo({top:'', left:'+=1000'}, 800);
    });//end of click

    $(".arrows .left").fadeOut();
})//end of ready
