var header = $('.header');
var banner = $('.banner');
var bannerHeight = banner.outerHeight();
var bannerOffsetTop = banner.offset().top;

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > bannerOffsetTop + bannerHeight) {
    header.addClass('header-fixed');
  } else {
    header.removeClass('header-fixed');
  }
});