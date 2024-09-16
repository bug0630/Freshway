jQuery(document).ready(function () {
  $(".hamburger").click(function () {
    $(".menu_nav").css({ height: "100vh" });
  });
  $(".menu_X").click(function () {
    $(".menu_nav").css({ height: "0%" });
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  $(".swip_btn").on("mousedown touchstart", function (e) {
    isDown = true;
    startX =
      (e.pageX || e.originalEvent.touches[0].pageX) - $(this).offset().left;
    scrollLeft = $(this).scrollLeft();
  });

  $(".swip_btn").on("mouseleave touchend mouseup", function () {
    isDown = false;
  });

  $(".swip_btn").on("mousemove touchmove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x =
      (e.pageX || e.originalEvent.touches[0].pageX) - $(this).offset().left;
    const walk = (x - startX) * 2; // 드래그 속도 조절
    $(this).scrollLeft(scrollLeft - walk);
  });

  $(".slide1").css({ display: "flex" });
  $(".swip_btn")
    .find("li")
    .eq(0)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide1").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("li")
    .eq(1)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide2").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("li")
    .eq(2)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide3").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("li")
    .eq(3)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide4").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("li")
    .eq(4)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide5").css({ display: "flex" });
    });
  $(".swip_btn")
    .find("li")
    .eq(5)
    .click(function () {
      $(".slide li").css({ display: "none" });
      $(".slide6").css({ display: "flex" });
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
