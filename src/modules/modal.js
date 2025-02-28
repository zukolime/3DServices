const modal = () => {
  const modal = document.querySelector(".popup");
  const popupBtn = document.querySelectorAll(".popup-btn");
  const closeBtn = document.querySelector(".popup-close");
  const popupContent = document.querySelector(".popup-content");

  const isMobile = window.innerWidth <= 768;

  let active = false;
  let count = 0;
  let idInterval;

  const animateShowModal = () => {
    count++;
    idInterval = requestAnimationFrame(animateShowModal);

    if (count <= 10) {
      modal.style.display = `block`;
      popupContent.style.top = `${count}%`;
    } else {
      cancelAnimationFrame(idInterval);
      active = false;
    }
  };

  const animateHideModal = () => {
    count--;
    idInterval = requestAnimationFrame(animateHideModal);

    if (count >= 0) {
      popupContent.style.top = `${count}%`;
    } else {
      cancelAnimationFrame(idInterval);
      modal.style.display = `none`;
      active = false;
    }
  };

  popupBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isMobile) {
        animateShowModal();
      } else {
        modal.style.display = `block`;
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    if (!isMobile) {
      animateHideModal();
    } else {
      modal.style.display = `none`;
    }
  });
};

export default modal;
