$(document).ready(function () {
  var $mBtn = $(".gnb .menu-btn"),
    $pannel = $(".gnb .device"),
    $container = $(".container");

  var mobileMenuBtnMotionHandler = function (e) {
    if (!$pannel.hasClass("active")) {
      $pannel.addClass("active");
      $container.addClass("gnb-active");
    } else {
      $pannel.removeClass("active");
      $container.removeClass("gnb-active");
    }
  };

  $mBtn.on({
    click: mobileMenuBtnMotionHandler,
  });

  var preventDefaultAction = function (e) {
    e = e || window.event;
    if (e != undefined) {
      // 현재 이벤트가 상위로 전파되지 않도록 중단.
      if (e.stopPropagation) {
        // W3C standard variant
        e.stopPropagation();
      } else {
        // IE variant
        e.cancelBubble = true;
      }
      //
      if (e.preventDefault) {
        // W3C variant
        e.preventDefault();
      } else {
        // IE<9 variant:
        e.returnValue = false;
      }
    }
  };

  $("pre code").each(function (i, block) {
    hljs.highlightBlock(block);
  });

  var codeAreaHandler = (function () {
    var $codeArea = $("pre code"),
      $targetCodeArea;

    $codeArea.before('<button class="code-open-btn">열기</button>');

    var $codeOpenBtn = $(".code-open-btn");

    $codeOpenBtn.on("click", function () {
      $targetCodeArea = $(this).next("code");
      if ($targetCodeArea.hasClass("active")) {
        $targetCodeArea.removeClass("active");
      } else {
        $targetCodeArea.addClass("active");
      }
    });
  })();
});
