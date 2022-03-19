const moreBtn = document.querySelector(".more"),
  modal = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  closeBtn = document.querySelector(".modal__close");

moreBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
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
