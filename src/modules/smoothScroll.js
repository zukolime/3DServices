const smoothScroll = () => {
  const scrollBtn = document.querySelector("main>a");
  const targetBlock = document.getElementById("service-block");

  let idInterval;

  const animateSmoothScroll = () => {
    const startPosition = document.documentElement.scrollTop;
    const step = 16;

    if (startPosition < targetBlock.offsetTop) {
      document.documentElement.scrollTop = startPosition + step;
      idInterval = requestAnimationFrame(animateSmoothScroll);
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
