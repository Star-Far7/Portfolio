const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form),
      body = {};

    formData.append("form", form.classList.value);

    formData.forEach((value, field) => {
      body[field] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new error(response.status);
        }
      })
      .then((data) => {
        alert("Данные отправлены успешно");
      })
      .catch((error) => {
        alert("Данные отправлены с ошибкой: " + error.message);
      })
      .finally(() => {
        form.reset();
      });
  });
});
