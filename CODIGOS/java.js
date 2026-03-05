/*        /\_/\       Opa!! Vejo que você está dando uma espiadinha por aqui, hehe..
        = ( • . • ) =   Fique a vontade para pegar qualquer coisa.. mesmo que nem eu entenda
          /      \      a bagunça que aqui fica..  CSS AJEITADO COM IA!!!
                          */

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

 var sites = [
                {
                    url: "malune.net",
                    image: "malune.gif",
                },
                {
                    url: "phantasmagorya.neocities.org",
                    image: "https://marinados.neocities.org/Todas%20Fotos/ads.gif"
                },
                {
                    url: "sargx.net",
                    image: "https://marinados.neocities.org/Todas%20Fotos/ads2.gif",
                },
                {
                    url: "marinados.neocities.org",
                    image: "https://marinados.neocities.org/marinados.gif",
                },
            ];

            var body = document.body;
            var link = document.getElementById("imglink");

            function changeAd() {
                var i = Math.floor(Math.random() * sites.length);
                body.style.backgroundImage =
                    "url('/navlink/assets/" + sites[i].image + "')";
                link.href = "https://" + sites[i].url;
            }

            changeAd();
            setInterval(changeAd, 10000);