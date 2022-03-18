const tabButtons = document.querySelectorAll(".design-list__item"),
  tabImage = document.querySelectorAll(".design-images"),
  tabDescription = document.querySelectorAll(".design__descr"),
  tabBlockImage = document.querySelectorAll(".design-block__img"),
  tabTitle = document.querySelectorAll(".design__title"),
  titleSite = document.querySelector("title");

/*
	функция принимает в себя массив и data атрибут 
	перебирает миссив и сравнивая data атрибут итерируемого эдемента 
	с входящим data атрибутом добавляет или убирате клас
	*/
const cangeContant = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

/*
	Обработчик события на клик кнопки 
	меняет картинки, текст, заголовок, title страницы 
	и добавляет или убирает класс кнопкам
	*/
tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (e) => {
    const dataValue = tabButton.dataset.tabsHandler;

    cangeContant(tabDescription, dataValue);
    cangeContant(tabImage, dataValue);
    cangeContant(tabBlockImage, dataValue);

    tabTitle.forEach((title, indexTitle) => {
      if (index === indexTitle) {
        title.classList.remove("hidden");
        titleSite.innerHTML = title.innerHTML;
      } else {
        title.classList.add("hidden");
      }
    });

    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});
