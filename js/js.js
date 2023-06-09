console.clear();

$(".close-btn").click(function () {
  $(".top-popup").addClass("active");
});

function sub(no) {
  $(".sub-menu > ul > .sub-" + no).hover(
    function () {
      $(".sub-menu > ul > .sub-" + no + " .img-2").css("display", "block");
      $(".sub-menu > ul > .sub-" + no + " .img-1").css("display", "none");
    },
    function () {
      $(".sub-menu > ul > .sub-" + no + " .img-2").css("display", "none");
      $(".sub-menu > ul > .sub-" + no + " .img-1").css("display", "block");
    }
  );
}
sub(1);
sub(2);
sub(3);
sub(4);

//스와이퍼 코드
const swiper = new Swiper(".swiper-box-1 .swiper", {
  // Optional parameters
  direction: "horizontal",
  //자동재생
  autoplay: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-box-1 .swiper-pagination",
    //슬라이드를 숫자로 바꿔주는 코드
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-1 .swiper-button-next",
    prevEl: ".swiper-box-1 .swiper-button-prev",
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiper2 = new Swiper(".swiper-box-2 .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-2 .swiper-button-next",
    prevEl: ".swiper-box-2 .swiper-button-prev",
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiper3 = new Swiper(".swiper-box-3 .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-3 .swiper-button-next",
    prevEl: ".swiper-box-3 .swiper-button-prev",
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
