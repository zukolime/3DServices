const timer = (deadline) => {
  const greeting = document.getElementById("greeting");
  const today = document.getElementById("today");
  const currentTime = document.getElementById("current-time");
  const countdown = document.getElementById("new-year-countdown");

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Доброе утро";
    } else if (hour >= 12 && hour < 16) {
      return "Добрый день";
    } else if (hour >= 16 && hour < 22) {
      return "Добрый вечер";
    } else {
      return "Доброй ночи";
    }
  };

  const getCurrentDay = () => {
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const today = new Date();
    return daysOfWeek[today.getDay()];
  };

  const getCurrentTime = () => new Date().toLocaleTimeString("en");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    return { timeRemaining, days };
  };

  const timerOnZeroes = () => {
    countdown.textContent = "До Нового года осталось 0 дней";
  };

  const getNounDeclension = function (number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };

  const updateContent = () => {
    const getTime = getTimeRemaining();
    const getDayDeclension = getNounDeclension(getTime.days, "день", "дня", "дней");

    greeting.textContent = getGreeting();
    today.textContent = `Сегодня: ${getCurrentDay()}`;
    currentTime.textContent = `Текущее время: ${getCurrentTime()}`;
    countdown.textContent = `До Нового года осталось ${getTime.days} ${getDayDeclension}`;

    if (getTime.timeRemaining < 0) {
      timerOnZeroes();
    }
  };

  setInterval(() => {
    updateContent();
  }, 1000);

  updateContent();
};

export default timer;
