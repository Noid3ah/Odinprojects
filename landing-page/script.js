const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    nav.classList.add(".nav-slide");
  });
};

navSlide();
