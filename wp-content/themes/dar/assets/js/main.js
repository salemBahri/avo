$(document).ready(function () {
  // sidebar
  $(".navbar-toggler-icon").click(function () {
    $(".sidebar").toggleClass("sidebar-width");
    $(".close-overlay").addClass("open-overlay");
  });

  $(".close-side").click(function () {
    $(".sidebar").removeClass("sidebar-width");
    $(".close-overlay").removeClass("open-overlay");
    jQuery(".site-search").removeClass("open");
  });
  $(".close-overlay").click(function () {
    $(".sidebar").removeClass("sidebar-width");
    $(this).removeClass("open-overlay");
  });
  $(".mynav .nav-link").click(function () {
    $(".mynav .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".side-content ul li").click(function () {
    $(this).find(".submenu").toggle();
  });

  // my account dropdown
  $(".my-account").click(function () {
    $(this).find("ul").toggle();
  });

  //  nice select
  $("select").niceSelect();
  // ////////////////

  // animation
  wow = new WOW();
  wow.init();

  $(".sidebar .nav-item").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".sidebar .nav-item").removeClass("active");
      $(this).addClass("active");
    }
  });

  $(document).ready(function () {
    $(".sidebar .menu-item-has-children").click(function () {
      $(this).siblings().find(".sub-menu").slideUp();
      $(this).find(".sub-menu").toggle();
    });
  });

  // Search

  jQuery(".search-btn").click(function () {
    jQuery(".site-search").addClass("open");
  });

  jQuery(".site-search-close")
    .click(function () {
      jQuery(".site-search").removeClass("open");
    })
    .children()
    .click(function (e) {
      //	return false;
    });

  // home slider
  $(".slider-home").owlCarousel({
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i> ",
    ],
    // autoplay: true,
    loop: true,
    margin: 0,
    autoplayTimeout: 3000,
  });

  // card slider
  $(".card-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      "<i class='fal fa-long-arrow-left'></i> ",
      " <i class='fal fa-long-arrow-right'></i> ",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  });

  // card slider
  $(".offer-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    // autoplay: true,
    navText: [
      "<i class='fal fa-long-arrow-left'></i> ",
      " <i class='fal fa-long-arrow-right'></i> ",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  // for upload file
  $(document).on("change", ":file", function () {
    var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, "/").replace(/.*\//, "");
    input.trigger("fileselect", [numFiles, label]);
  });
  $(":file").on("fileselect", function (event, numFiles, label) {
    var input = $(this).parents(".input-group").find(":text"),
      log = numFiles > 1 ? numFiles + " files selected" : label;
    if (input.length) {
      input.val(log);
    } else {
      //            if (log) alert(log);
    }
  });
  $(".form-control").focus(function () {
    $(this).parents(".form-group").addClass("focused");
  });
  $(".form-control").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".form-group").removeClass("focused");
    } else {
      $(this).addClass("filled");
    }
  });
  $(document).on("change", ".btn-file :file", function () {
    var fileName = $("#uploadfile").val();
    $(".filename").val(fileName);
  });
  /*********************************************************************** */
  // toggle password
  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $(".accordian-item").click(function () {
    $(".accordian-item").removeClass("active");
    $(this).addClass("active");
  });
  // ////////////////////////
  $(".owl-navigation  .owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    center: true,
    dots: false,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash",
  });
  $(".owl-navigation  .owl-carousel.last").owlCarousel({
    items: 4,
    loop: false,
    center: true,
    dots: false,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash",
  });

  // sponser-slider
  $(".sponser-slider").owlCarousel({
    loop: true,
    margin: 15,
    navText: [
      "<i class='fal fa-arrow-circle-left'></i> ",
      " <i class='fal fa-arrow-circle-right'></i> ",
    ],
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // FancyBox
  $('[data-fancybox="gallary2"]').fancybox();
  // ////////////////

  /*********************************************************************** */
  // ********************** slick slider thumb ***********************
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          vertical: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 380,
        settings: {
          vertical: false,
          slidesToShow: 3,
        },
      },
    ],
  });

  //  to top button
  var mybutton = $("#mybtn");
  $(window).scroll(function () {
    $(window).scrollTop() >= 600 ? mybutton.show() : mybutton.hide();
  });

  mybutton.click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
