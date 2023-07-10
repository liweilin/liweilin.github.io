$(".mobile-nav-switch").click(function () {
    if($(this).hasClass('fa-bars-staggered')){
        $('body').css('overflow-y','hidden');
        $(this).closest('header').addClass('mobile-nav-open');
        $(this).removeClass('fa-bars-staggered').addClass('fa-close');
    }else{
        $('body').removeAttr('style');
        $(this).closest('header').removeClass('mobile-nav-open');
        $(this).removeClass('fa-close').addClass('fa-bars-staggered');
    }
});
