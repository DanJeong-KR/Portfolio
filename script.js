$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $("#header").addClass("bg-main py-[15px]");
      $("#header_name").addClass("text-first_text");
      $(".menu_btn").removeClass("hover:text-main");
    } else {
      $("#header").removeClass("bg-main py-[15px]");
      $("#header_name").removeClass("text-first_text");
      $(".menu_btn").addClass("hover:text-main");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $(".menu_btn").click(function () {
    $("#menu").toggleClass("left-0 md:bg-inherit bg-first_background");
    $(".menu_btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["웹 개발자", "서버 개발자", "블로거", "유투버", "프리랜서"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["웹 개발자", "서버 개발자", "블로거", "유투버", "프리랜서"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });

  $(".owl-dot").addClass("border-2 border-main");
});
