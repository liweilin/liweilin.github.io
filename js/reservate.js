$(".reservation-btn").click(function () {
  $("html,body").animate({
      scrollTop: $(".reservation").offset().top
  }, "medium")

  $('body').removeAttr('style');
  $(".mobile-nav-switch").closest('header').removeClass('mobile-nav-open');
  $(".mobile-nav-switch").removeClass('fa-close').addClass('fa-bars-staggered');
});
