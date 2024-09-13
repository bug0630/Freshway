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
  $(".max768 h5")
    .off("click")
    .on("click", function () {
      let $lnb = $(this).next(); // h5의 다음 형제 요소인 lnb 선택
      let $arrow = $(this).find(".material-symbols-outlined"); // 클릭된 h5 내의 arrow 선택
      if ($lnb.height() === 0) {
        // auto 높이 계산
        let autoHeight = $lnb.css("height", "auto").height();

        // height를 0으로 설정한 뒤, animate로 auto 높이만큼 변경
        $lnb.height(0).animate({ height: autoHeight }, 300);

        // 화살표 270도 회전
        $arrow.css({
          transform: "rotate(270deg)",
          transition: "transform 0.3s",
        });
      } else {
        // height를 다시 0으로 설정하며 애니메이션
        $lnb.animate({ height: "0" }, 300);

        // 화살표 원상태로 회전
        $arrow.css({
          transform: "rotate(90deg)",
          transition: "transform 0.3s",
        });
      }
    });
});
