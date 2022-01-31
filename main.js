window.addEventListener("load", (event) => {
  const header = document.querySelector("header");
  const scrollTop = document.querySelector("#scroll-top");
  const nav = document.querySelector("nav");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const logo = document.querySelector(".logo");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navListModal = document.querySelector(".nav-ul-modal");

  window.onscroll = function () {
    scrollTopFun();
    navBarScroll();
  };

  function scrollTopFun() {
    if (
      window.innerWidth > 450 &&
      (document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800)
    ) {
      scrollTop.style.display = "block";
    } else {
      scrollTop.style.display = "none";
    }
  }

  function navBarScroll() {
    if (
      document.body.scrollTop > 670 ||
      document.documentElement.scrollTop > 670
    ) {
      nav.style.backgroundColor = "#04323e";
      nav.style.height = "2.5rem";

      navListModal.style.top = "1.5rem";
    } else {
      if (menuIsOpen != true) nav.style.backgroundColor = "transparent";
      nav.style.height = "auto";

      navListModal.style.top = "2rem";
    }
  }

  header.scrollIntoView();

  let menuIsOpen = false;

  scrollTop.addEventListener("click", () => {
    header.scrollIntoView({ behavior: "smooth" });
  });

  hamburgerMenu.addEventListener("click", () => {
    navListModal.classList.toggle("open-modal");
    if (!menuIsOpen) {
      menuIsOpen = true;
      nav.style.backgroundColor = "#04323e";
    } else {
      menuIsOpen = false;
      if (
        document.body.scrollTop > 670 ||
        document.documentElement.scrollTop > 670
      ) {
        return;
      } else {
        nav.style.backgroundColor = "transparent";
      }
    }
  });
});
