jQuery(document).ready(function () {
  // 햄버거 메뉴 클릭 시 네비게이션 메뉴 열기
  $(".hamburger").click(function () {
    $(".menu_nav").css({ height: "100vh" });
    document.body.classList.add("no-scroll"); // 클래스 추가 시 addClass 사용
  });

  // 메뉴 닫기 버튼 클릭 시 네비게이션 메뉴 닫기
  $(".menu_X").click(function () {
    $(".menu_nav").css({ height: "0%" });
    document.body.classList.remove("no-scroll"); // 클래스 제거 시 removeClass 사용
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  // 마우스 또는 터치 시작 시 드래그 상태 활성화
  $(".swip_btn").on("mousedown touchstart", function (e) {
    isDown = true;
    startX =
      (e.pageX || e.originalEvent.touches[0].pageX) - $(this).offset().left;
    scrollLeft = $(this).scrollLeft();
  });

  // 마우스 또는 터치 끝날 때 드래그 상태 비활성화
  $(".swip_btn").on("mouseleave touchend mouseup", function () {
    isDown = false;
  });

  // 마우스 또는 터치 움직임에 따라 슬라이드 버튼 리스트 스크롤
  $(".swip_btn").on("mousemove touchmove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x =
      (e.pageX || e.originalEvent.touches[0].pageX) - $(this).offset().left;
    const walk = (x - startX) * 2; // 드래그 속도 조절
    $(this).scrollLeft(scrollLeft - walk);
  });

  // 첫 번째 슬라이드 표시 및 첫 번째 버튼에 활성화 스타일 적용
  $(".slide1").css({ display: "flex" });
  $(".swip_btn li")
    .eq(0)
    .addClass("active")
    .css({ backgroundColor: "#005b45", color: "white" });

  // 슬라이드 버튼 호버 시 스타일 적용
  $(".swip_btn li").hover(
    function () {
      if (!$(this).hasClass("active")) {
        $(this).css({ backgroundColor: "#005b45", color: "white" });
      }
    },
    function () {
      if (!$(this).hasClass("active")) {
        $(this).css({ backgroundColor: "", color: "" });
      }
    }
  );

  // 슬라이드 버튼 클릭 시 활성화 상태 및 스타일 적용
  $(".swip_btn li").click(function () {
    $(".swip_btn li")
      .removeClass("active")
      .css({ backgroundColor: "", color: "" });

    $(this)
      .addClass("active")
      .css({ backgroundColor: "#005b45", color: "white" });
  });

  // 슬라이드 버튼 클릭 시 해당 슬라이드 표시
  $(".swip_btn li").each(function (index) {
    $(this).click(function () {
      $(".slide li").hide(); // 모든 슬라이드 숨기기
      $(".slide" + (index + 1)).css({ display: "flex" }); // 해당 슬라이드 표시
    });
  });

  // 다음 슬라이드로 이동
  function goToNextSlide() {
    let currentIndex = $(".slide li:visible").index();
    let nextIndex = (currentIndex + 1) % $(".slide li").length;
    $(".slide li").hide();
    $(".slide li").eq(nextIndex).css({ display: "flex" });
    updateActiveButton(); // 슬라이드 변경 후 버튼 상태 업데이트
  }

  // 이전 슬라이드로 이동
  function goToPrevSlide() {
    let currentIndex = $(".slide li:visible").index();
    let prevIndex =
      (currentIndex - 1 + $(".slide li").length) % $(".slide li").length;
    $(".slide li").hide();
    $(".slide li").eq(prevIndex).css({ display: "flex" });
    updateActiveButton(); // 슬라이드 변경 후 버튼 상태 업데이트
  }

  // 현재 슬라이드에 맞는 버튼 활성화 상태 업데이트
  function updateActiveButton() {
    let currentIndex = $(".slide li:visible").index();
    $(".swip_btn li")
      .removeClass("active")
      .css({ backgroundColor: "", color: "" });
    $(".swip_btn li")
      .eq(currentIndex)
      .addClass("active")
      .css({ backgroundColor: "#005b45", color: "white" });
  }

  // 마우스 또는 터치 시작 시 시작 위치 저장
  $(".slide li").on("mousedown touchstart", function (e) {
    startX = e.pageX || e.originalEvent.touches[0].pageX;
  });

  // 마우스 또는 터치 끝날 때 종료 위치 저장 및 스와이프 처리
  $(".slide li").on("mouseup touchend", function (e) {
    endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
    handleSwipe();
  });

  // 스와이프 방향에 따라 슬라이드 이동
  function handleSwipe() {
    if (startX > endX + 50) {
      goToNextSlide();
    } else if (startX < endX - 50) {
      goToPrevSlide();
    }
  }

  // 모바일 뷰에서 아코디언 메뉴 기능 처리
  $(".max768 h5")
    .off("click")
    .on("click", function () {
      let $lnb = $(this).next();
      let $arrow = $(this).find(".material-symbols-outlined");
      if ($lnb.height() === 0) {
        let autoHeight = $lnb.css("height", "auto").height();
        $lnb.height(0).animate({ height: autoHeight }, 300);
        $arrow.css({
          transform: "rotate(45deg)",
          transition: "transform 0.3s",
        });
      } else {
        $lnb.animate({ height: "0" }, 300);
        $arrow.css({
          transform: "rotate(90deg)",
          transition: "transform 0.3s",
        });
      }
    });

  // 페이지 상단으로 스크롤 이동
  $("#top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });
});
