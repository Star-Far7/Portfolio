/**
 * Функция открытия и закрытия бургер меню
 * закрыти при нажатие не на меню
 * и при нажатие на ссылки
 */
const getBurger = () => {
  const burger = document.querySelector(".humburger-menu"),
    menu = document.querySelector(".menu"),
    menuLinks = document.querySelectorAll(".menu-list__link");

  burger.addEventListener("click", () => {
    menu.classList.add("menu-active");
  });

  menuLinks.forEach((i) => {
    i.addEventListener("click", () => {
      menu.classList.remove("menu-active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!(e.target.closest(".menu") || e.target.closest(".humburger-menu"))) {
      menu.classList.remove("menu-active");
    }
  });
};
getBurger();
