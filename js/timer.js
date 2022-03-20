/**
 * Создаем таймер и форматируем его
 * и что бы не ломался после конца отсчета
 */
const getTimer = () => {
  const timerBlock = document.querySelector(".timer__time"),
    deadline = "31 march 2022";

  let interval;

  const updateClock = () => {
    const date = new Date().getTime(),
      dateDeadline = new Date(deadline).getTime(),
      timeRemaining = (dateDeadline - date) / 1000;

    const day = Math.floor(timeRemaining / 60 / 60 / 24),
      hours = Math.floor((timeRemaining / 60 / 60) % 24),
      minutes = Math.floor((timeRemaining / 60) % 60),
      seconds = Math.floor(timeRemaining % 60);

    const fDay = day < 10 ? "0" + day : day,
      fHours = hours < 10 ? "0" + hours : hours,
      fMinutes = minutes < 10 ? "0" + minutes : minutes,
      fSeconds = seconds < 10 ? "0" + seconds : seconds;

    timerBlock.textContent = `${fDay}:${fHours}:${fMinutes}:${fSeconds}`;

    if (timeRemaining <= 0) {
      clearInterval(interval);
      timerBlock.textContent = `00:00:00:00`;
    }
  };

  interval = setInterval(updateClock, 500);
};
getTimer();
