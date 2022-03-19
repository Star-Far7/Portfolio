/**
 * Функция октрытия и закрытия модального окна
 * Закрытие происходит при нажатие на крестик,
 * в не поля и клавишу ESC
 */
const getModal = () => {
  const moreBtn = document.querySelectorAll(".more"),
    modal = document.querySelector(".modal"),
    overlay = document.querySelector(".overlay"),
    closeBtn = document.querySelector(".modal__close");

  moreBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
    }
  });
};
getModal();
