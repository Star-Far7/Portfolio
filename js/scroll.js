/**
 * Собираем все ссылки в массив
 * перебирая массив навешиваем им плавный скролл
 * библиотекой seamless-scroll-polyfill
 */
const getScroll = () => {
  const links = document.querySelectorAll(".menu-list__link"),
    mainBtn = document.querySelector(".main__button"),
    mainScroll = document.querySelector(".main__scroll");

  const allLinks = [...links, mainBtn, mainScroll];

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault;

      const id = link.getAttribute("href").substring(1),
        section = document.getElementById(id);

      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    });
  });
};
getScroll();
