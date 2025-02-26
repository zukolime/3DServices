const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const timerOnZeroes = () => {
    timerHours.textContent = "00";
    timerMinutes.textContent = "00";
    timerSeconds.textContent = "00";
  };

  const addZeroBefore = (value) => {
    return value < 10 ? "0" + value : value;
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    timerHours.textContent = addZeroBefore(getTime.hours);
    timerMinutes.textContent = addZeroBefore(getTime.minutes);
    timerSeconds.textContent = addZeroBefore(getTime.seconds);

    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval);
      timerOnZeroes();
    }
  };

  const idInterval = setInterval(updateClock, 1000);
  updateClock();
};

export default timer;
