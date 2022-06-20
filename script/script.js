window.onload = function () {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
    }, 1500);
};
$(document).ready(function () {
    $("#pagepiling").pagepiling({
        navigation: {
            textColor: "white",
            bulletsColor: "white",
            position: "right",
            tooltips: ["Home", "Projects", "About Me", "Contact"],
        },
    });
});
new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
document.getElementById("li_row1").onmouseenter = function () {
    document.getElementById("li_row1").style.height = "100%";
    document.getElementById("li_row1").style.width = "100%";
    document.getElementById("li_row1").style.flexDirection = "column";
    document.getElementById("li_row2").style.display = "none";
    document.getElementById("li_row3").style.display = "none";
    document.getElementById("progress1").style.display = "flex";
    document.getElementById("progress1").style.marginTop = "10px";
    document.getElementById("HTMLprogress").style.animation = "1.5s progressHTML forwards";
};
document.getElementById("li_row1").onmouseleave = function () {
    document.getElementById("li_row1").style.height = "";
    document.getElementById("li_row1").style.width = "";
    document.getElementById("li_row1").style.flexDirection = "row";
    document.getElementById("li_row2").style.display = "flex";
    document.getElementById("li_row3").style.display = "flex";
    document.getElementById("progress1").style.display = "none";
    document.getElementById("progress1").style.marginTop = "0";
    document.getElementById("HTMLprogress").style.animation = "none";
};
document.getElementById("li_row2").onmouseenter = function () {
    document.getElementById("li_row2").style.height = "100%";
    document.getElementById("li_row2").style.width = "100%";
    document.getElementById("li_row2").style.flexDirection = "column";
    document.getElementById("li_row1").style.display = "none";
    document.getElementById("li_row3").style.display = "none";
    document.getElementById("progress2").style.display = "flex";
    document.getElementById("progress2").style.marginTop = "10px";
    document.getElementById("CSSprogress").style.animation = "1.5s progressCSS forwards";
};
document.getElementById("li_row2").onmouseleave = function () {
    document.getElementById("li_row2").style.height = "";
    document.getElementById("li_row2").style.width = "";
    document.getElementById("li_row2").style.flexDirection = "row";
    document.getElementById("li_row1").style.display = "flex";
    document.getElementById("li_row3").style.display = "flex";
    document.getElementById("progress2").style.display = "none";
    document.getElementById("progress2").style.marginTop = "0";
    document.getElementById("CSSprogress").style.animation = "none";
};
document.getElementById("li_row3").onmouseenter = function () {
    document.getElementById("li_row3").style.height = "100%";
    document.getElementById("li_row3").style.width = "100%";
    document.getElementById("li_row3").style.flexDirection = "column";
    document.getElementById("li_row2").style.display = "none";
    document.getElementById("li_row1").style.display = "none";
    document.getElementById("progress3").style.display = "flex";
    document.getElementById("progress3").style.marginTop = "10px";
    document.getElementById("JSprogress").style.animation = "1.5s progressJS forwards";
};
document.getElementById("li_row3").onmouseleave = function () {
    document.getElementById("li_row3").style.height = "";
    document.getElementById("li_row3").style.width = "";
    document.getElementById("li_row3").style.flexDirection = "row";
    document.getElementById("li_row2").style.display = "flex";
    document.getElementById("li_row1").style.display = "flex";
    document.getElementById("progress3").style.display = "none";
    document.getElementById("progress3").style.marginTop = "0";
    document.getElementById("JSprogress").style.animation = "none";
};
