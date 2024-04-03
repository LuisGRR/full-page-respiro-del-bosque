import "animejs";
import Pageable from "pageable";
import "./styles.css";

const pageable = new Pageable("#container", {
  pips: false,
  childSelector: "[data-anchor]",
  animation: 500,
  onInit: init,
});

document.querySelectorAll("#menu ul li a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    pageable.scrollToAnchor(event.target.getAttribute("href"));
  });
});

pageable.on("scroll.end", function () {
  menuVer();
});

function init() {
  menuVer();
}

function menuVer() {
  let currentAnchor = window.location.hash.slice(1);
  let menuItems = document.querySelectorAll("#menu ul li a");
  menuItems.forEach(function (item) {
    let itemAnchor = item.getAttribute("href").slice(1);

    if (itemAnchor === currentAnchor) {
      item.classList.add("active");
      
    } else {
      item.classList.remove("active");
      
    }
  });
}

document.getElementById("arrow").addEventListener("click", function () {
  pageable.next();
});

document.querySelectorAll(".hoja").forEach((hoja) => {
  let home = document.querySelector(".home");
  let homeHeight = home.offsetHeight;

  let duracion = Math.random() * 5 + 4;
  let retraso = Math.random() * 2;
  let posicionInicialY = Math.random() * homeHeight;

  hoja.style.animationDuration = `${duracion}s`;
  hoja.style.animationDelay = `${retraso}s`;
  hoja.style.top = `${posicionInicialY}px`;
});
