$(document).ready(function () {
    $('.gallery li:lt(1)').show();
    $('.less').show();
    var items =  3;
    var shown =  1;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.gallery li:visible').length+1;
        if(shown < items) {
          $('.gallery li:lt('+shown+')').show(300);
          $('.more').css('background-color', '#743d8c');
        } else {
          $('.gallery li:lt('+items+')').show(300);
          $('.more').show();
          $('.more').css('background-color', '#909090');
        }
        $('.less').css('background-color', '#743d8c');
    });
    $('.less').click(function () {
        $('.gallery li').not(':lt(1)').hide(300);
        $('.less').css('background-color', '#909090');
        $('.more').show();
        $('.more').css('background-color', '#743d8c');
        $('.less').show();
    });
});