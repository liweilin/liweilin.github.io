// banner
var swiper = new Swiper(".banner", {
  direction: "horizontal",
  loop: false,
  autoplay: {
      delay: 5000,
      disableOnInteraction: true
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    slideChange: function () {
      var activeIndex = this.realIndex;
      var activeSlide = this.slides[activeIndex];
      var activeText = activeSlide.querySelector(".swiper-slide-text");
      var activeTitle = activeText.querySelector("h2");
      var activeDesc = activeText.querySelector("p");
      var activeBtn = activeText.querySelector(".more-btn");
      activeTitle.style.animation = "none";
      activeDesc.style.animation = "none";
      if (activeBtn) {
        activeBtn.style.animation = "none";
        void activeBtn.offsetWidth;
        activeBtn.style.animation = null;
      }
      void activeTitle.offsetWidth;
      void activeDesc.offsetWidth;
      activeTitle.style.animation = null;
      activeDesc.style.animation = null;
    },
  },
});

// symptom
var swiper = new Swiper(".symptom", {
  // slidesPerView: 4,
  // spaceBetween: 44,
  breakpoints: {
    320: {
      slidesPerView: 2, 
      spaceBetween: 24,
    },    
    768: {
      slidesPerView: 3, 
      spaceBetween: 24,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 44,
    }
  },
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// comment
var swiper = new Swiper(".comment", {
  centeredSlides: false,
  breakpoints: {
    320: {
      slidesPerView: 1, 
      spaceBetween: 24,
    },    
    768: {
      slidesPerView: 2, 
      spaceBetween: 24,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 44,
    }
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//facility
var swiper = new Swiper(".facility", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});

/* team-member-PT */
var swiperpt = new Swiper(".group-pt", {
  loop: false,
  freeMode: true,
  grabCursor: true,
  mousewheel: true,
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 4,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 8,
    },
    900: {
      slidesPerView: 10,
    },
    1080: {
      slidesPerView: 12,
    },
    1400: {
      slidesPerView: 16,
    }
  }
});

var swiperptShow = new Swiper(".swiper-pt", {
  // Optional parameters
  loop: true,
  grabCursor: false,
  slidesPerView: "auto",
  followFinger: false,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: swiperpt,
  },
});

/* team-member-AT */
var swiperat = new Swiper(".group-at", {
  loop: false,
  freeMode: true,
  grabCursor: true,
  edgeSwipeDetection:true,
  mousewheel: true,
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 4,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 8,
    },
    900: {
      slidesPerView: 10,
    },
    1080: {
      slidesPerView: 12,
    },
    1400: {
      slidesPerView: 16,
    }
  }
});

var swiperatShow = new Swiper(".swiper-at", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  followFinger: false,
  watchSlidesProgress: true,
  type: "fraction",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: swiperat,
  },
});

// smarc
var swipersmarc = new Swiper(".eqsmarc", {
  slidesPerView: 2,
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
},
});

// 物理治療
var swiperTreatPT = new Swiper(".treat-pt", {
  spaceBetween: 5,
  freeMode: true,
  watchSlidesProgress: true,
  edgeSwipeDetection:true,
  mousewheel: true,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 6,
    }
  }
});
var swiperTreatPTShow = new Swiper(".treat-pt-show", {
  spaceBetween: 10,
  effect: 'fade',
  watchSlidesProgress: true,
  fadeEffect: {
    crossFade: true
  },
  thumbs: {
    swiper: swiperTreatPT,
  },
});
