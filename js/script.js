const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [90, 80, 75, 60, 80, 70];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();
window.addEventListener("resize", () => {
  window.location.reload();
});

$('document').ready(function(){
  var typed6 = new Typed('#typed6', {
    strings:["Desarrollador Web"],
    typeSpeed: 300,
    backSpeed: 100,
    loop: true
  });
});

document.querySelector(".navbar-btn2").addEventListener("click", () => {
  document.querySelector(".navbar-wrapper2").classList.toggle("change2");
});


document.querySelector(".card-btn4").addEventListener("click", () => {
  document.querySelector(".container4").classList.toggle("change4");
});
