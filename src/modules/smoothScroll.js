const smoothScroll = () => {
  const scrollBtn = document.querySelector("main>a");
  const targetBlock = document.getElementById("service-block").offsetTop;

  let startPosition = document.documentElement.scrollTop;
  let idInterval;

  const animateSmoothScroll = () => {
    startPosition += 24;
    idInterval = requestAnimationFrame(animateSmoothScroll);

    if (startPosition < targetBlock) {
      document.documentElement.scrollTop = `${startPosition}`;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    animateSmoothScroll();
  });
};

export default smoothScroll;
