var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//Fade out, optional
var s = document.getElementById("preloader").style;
s.opacity = 1;
(function fade() {
  (s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 40);
})();

$(document).ready(function () {
  $(".playy").click(function () {
    $(".pausee").show();
    $(".playy").hide();
  });

  $(".pausee").click(function () {
    $(".playy").show();
    $(".pausee").hide();
  });
});

function songstart() {
  var harmonia = document.getElementById("tune");
  if (harmonia.paused) {
    harmonia.play();
  } else {
    harmonia.pause();
  }
}

$(document).ready(function () {
  var owari = document.getElementById("tune");
  owari.onended = function () {
    $(".playy").show();
    $(".pausee").hide();
  };
});