$("button").click(function () {
  var classListValue = this.classList.value;
  var lastChar = classListValue.charAt(classListValue.length - 1);

  $(this)
    .find("img")
    .attr("src", function (i, src) {
      return src.includes("icon-plus.svg")
        ? "./assets/images/icon-minus.svg"
        : "./assets/images/icon-plus.svg";
    });

  if ($(".answer-" + lastChar).hasClass("is-slide-down")) {
    $(".answer-" + lastChar).slideUp("slow");
    $(".answer-" + lastChar).removeClass("is-slide-down");
  } else {
    $(".answer-" + lastChar).slideDown("slow");
    $(".answer-" + lastChar).addClass("is-slide-down");
  }
});
