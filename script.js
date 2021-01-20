$(function() {

    $(".box-hidden").slice(0, 3).show();

    $("#loadMore").on('click', function(e) {
        console.log('wtf?');
        e.preventDefault();
        $(".box-hidden:hidden").slice(0, 3).slideDown();
        if ($(".box-hidden:hidden").lenght == 0) {
            $("#load").fadeOut('slow');
        }
        /*$('html,body').animate({
            scrollTop: $(this).offset().top
        }, 100);*/
    });
});