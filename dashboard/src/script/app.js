const menu = document.querySelector(".menu");
const dashboard = document.querySelector(".sidebar");

let closed = true;

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  console.log(width);
  if (width > "850px") {
    dashboard.style.backgroundColor = "#555";
  }
});

menu.addEventListener("click", () => {
  if (closed) {
    dashboard.style.transform = "translateX(0px)";
    dashboard.style.transition = "transform .4s ease";
  } else {
    dashboard.style.transform = "translateX(400px)";
    dashboard.style.transition = "transform .2s ease-out";
  }
  closed = !closed;
});
