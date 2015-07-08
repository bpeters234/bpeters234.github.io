//Scroll down with keydown
//$(document).keydown(function (e) {
//    var scrolled = 0;

//    if (e.keyCode == 40) {
//        scrolled = scrolled + 600;
//        $(".square-box").animate({
//            scrollTop: scrolled
//        });
//        return false;
//    }

//    if (e.keyCode == 38) {

//        scrolled = scrolled - 600;

//        $(".square-box").animate({
//            scrollTop: scrolled
//        });
//        return false;
//    }
//});

//Mobile lightbox

//$(".item").click(function () {
//    $(this).toggleClass("modal");
//});

//Switching classes
/*setInterval(function () {
    $('.design3 .pattern').toggleClass('pattern2');
    setTimeout(function () {
        $('.design3 .pattern').toggleClass('pattern2');
    },5000)
}, 5000);*/
//
/*setInterval(function () {
    $('.design3 .pattern').toggleClass('pattern2');
    setTimeout(function () {
        $('.design3 .pattern').toggleClass('pattern2');
    }, 1000)
}, 7000);*/

$(document).ready(function() {
    var myClasses = ["pattern2", "pattern3", "pattern4", "pattern5"];
    var count = 0;

    setInterval(function() {
        $(".design3 .pattern1").removeClass("pattern2 pattern3 pattern4 pattern5").addClass(myClasses[count]);
        count >= 3 ? count = 0 : count += 1;
    }, 5000);


});

$(".info-btn").click(function() {
    $(this).closest('.design-block').find('.info').toggleClass("show");
	$(this).toggleClass("click-state");

});




//
//var scrolled=0;
//
//$(document).ready(function () {
//    $(".fa-arrow-down").on("click", function () {
//        scrolled = scrolled - 300;
//        $(".square-box").animate({
//            scrollTop: scrolled
//        });
//    });
//});