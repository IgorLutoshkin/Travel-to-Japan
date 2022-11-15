(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

/* Burger handler */
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".head-nav");
  const menuClouseItem = document.querySelector(".header-nav-clouse");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("head-nav-active");
  });
  menuClouseItem.addEventListener("click", () => {
    menu.classList.remove("head-nav-active");
  });
})();
