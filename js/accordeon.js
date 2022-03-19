/**
 * Функция аккордиона
 * Элемменты открываются но так чобы другие закрывались
 */
const accordeon = () => {
  const accordeon = document.querySelector(".feature-list"),
    accordeonBtn = document.querySelectorAll(".feature__link ");

  accordeonBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      accordeonBtn.forEach((button) => {
        button.classList.remove("feature__link_active");
        button.nextElementSibling.classList.add("hidden");
      });

      btn.classList.toggle("feature__link_active");
      btn.nextElementSibling.classList.toggle("hidden");
    });
  });
};
accordeon();
