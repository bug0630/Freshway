jQuery(document).ready(function () {
  $(".hamburger").click(function () {
    $(".menu_nav").css({ height: "100vh" });
  });
  $(".menu_X").click(function () {
    $(".menu_nav").css({ height: "0%" });
  });

  $(".swip_btn")
    .find("div")
    .eq(0)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide1").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("div")
    .eq(1)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide2").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("div")
    .eq(2)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide3").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("div")
    .eq(3)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide4").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("div")
    .eq(4)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide5").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("div")
    .eq(5)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide6").css({ display: "flex" });
    });

  $(window).scroll(function () {
    if ($(window).scrollTop() < 1200) {
      $(".ESG h5").fadeOut();
      $(".ESG h5").css({ left: "100%" });
    }
    if ($(window).scrollTop() > 1200) {
      $(".ESG h5").eq(0).fadeIn(1000);
      $(".ESG h5").eq(0).css({ left: "45%" });
    }
    if ($(window).scrollTop() > 1550) {
      $(".ESG h5").eq(1).fadeIn(1000);
      $(".ESG h5").eq(1).css({ left: "45%" });
    }
    if ($(window).scrollTop() > 1900) {
      $(".ESG h5").eq(2).fadeIn(1000);
      $(".ESG h5").eq(2).css({ left: "45%" });
    }
    if ($(window).scrollTop() > 2250) {
      $(".ESG h5").eq(3).fadeIn(1000);
      $(".ESG h5").eq(3).css({ left: "30%" });
    }
    if ($(window).scrollTop() > 2600) {
      $(".ESG h5").eq(4).fadeIn(1000);
      $(".ESG h5").eq(4).css({ left: "35%" });
    }
  });
  document.querySelectorAll(".fnb h5").forEach(function (h5) {
    h5.addEventListener("click", function () {
      const lnb = this.nextElementSibling; // h5의 다음 형제 요소인 lnb 선택
      const currentDisplay = window.getComputedStyle(lnb).display;

      // display가 'none'이면 'block'으로, 그렇지 않으면 'none'으로 설정
      if (currentDisplay === "none") {
        lnb.style.display = "block";
      } else {
        lnb.style.display = "none";
      }
    });
  });
});
