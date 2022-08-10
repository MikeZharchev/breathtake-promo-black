// DOM ELEMENTS
const header = document.querySelector(".header--actual");
const headerPlaceholder = document.querySelector(".header--placeholder");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".btn-menu-mob");
const overlay = document.querySelector(".overlay");
const buttonMenuClose = document.querySelector(".btn-menu-close");
const anchor0 = document.querySelector(".anchor--0");
const anchor1 = document.querySelector(".anchor--1");
const anchor2 = document.querySelector(".anchor--2");
const anchor3 = document.querySelector(".anchor--3");
const anchor4 = document.querySelector(".anchor--4");
const sectionHero = document.querySelector(".section--hero");
const section1 = document.querySelector(".section--see-what-you-type");
const section2 = document.querySelector(".section--write-faster");
const section3 = document.querySelector(".section--link");
const section4 = document.querySelector(".section--focus");
const sectionCta = document.querySelector(".section--cta");
const emailInputBottom = document.querySelector(".email-input-bottom");
const emailInput = document.querySelector(".email-input");
const logoLink = document.querySelector(".logo-link");

const headerCta = document.querySelector(".btn--header");
const anchorBtns = document.querySelectorAll(".btn--anchor");

emailInput.focus();

// STICKY NAV

const stickyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("header-sticky");
    headerPlaceholder.classList.remove("hidden");
    console.log("if");
  } else {
    headerPlaceholder.classList.add("hidden");
    header.classList.remove("header-sticky");
    console.log("else");
  }
};

const observer = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(sectionHero);

// TYPED JS
const options = {
  strings: ["Novel", "Script", "Post", "Article", "Story"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  startDelay: 1000,
  backDelay: 1000,

  //   smartBackspace: true,
};

const typed = new Typed(".typed", options);

// SMOOTH SCROLLING
// Event listeners
anchorBtns.forEach((element) => {
  element.addEventListener("click", () => {
    sectionCta.scrollIntoView({ behavior: "smooth", block: "end" });
    console.log("clicked");
    setTimeout(() => {
      emailInputBottom.focus();
    }, 1000);
  });
});

anchor0.addEventListener("click", () => {
  sectionHero.scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(() => {
    emailInput.focus();
  }, 1000);
});
anchor1.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" });
});
anchor2.addEventListener("click", () => {
  section2.scrollIntoView({ behavior: "smooth" });
});
anchor3.addEventListener("click", () => {
  section3.scrollIntoView({ behavior: "smooth" });
});
anchor4.addEventListener("click", () => {
  section4.scrollIntoView({ behavior: "smooth" });
});
