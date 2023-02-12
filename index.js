// ==============MOBILE NAVBAR SECTION==============
// ==================STARTS HERE====================
const mobile_btn = document.querySelector("#mobile-btn");
const mobile_header = document.querySelector(".header");

mobile_btn.addEventListener("click", () =>{
  mobile_header.classList.toggle("active");
});

// ===================HERO SECTION==================
// ==================STARTS HERE====================
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor:true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ==================SHOP SECTION===================
// ==================STARTS HERE====================
const shop = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop:true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200:{
      slidesPerView: 1,
    },
    300:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

  },
});

// =================REVIEWS SECTION=================
// ==================STARTS HERE====================
const review = new Swiper(".reviews-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200:{
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200:{
      slidesPerView: 2,
      spaceBetween: 60,
    }
  },
});

// ==================BLOG SECTION===================
// ==================STARTS HERE====================
const blog = new Swiper(".blog-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992:{
      slidesPerView: 2,
      spaceBetween: 60,
    },

  },
});

