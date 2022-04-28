$(document).ready(function() {
    //MyBlah("hello");
    var count = 1;
    var maxCount = 2;
    textAnimate(count,maxCount);
});

function textAnimate(count,maxCount) {
    $(".text"+count).animate({
        opacity: '0'
    }, { duration: 900, queue: false });

    count++;
    if (count > maxCount) {count = 1;}

    $(".text"+count).animate({
        opacity: '1'
    }, { duration: 900, queue: false });

    window.setTimeout(function() { textAnimate(count,maxCount) }, 3000);
}