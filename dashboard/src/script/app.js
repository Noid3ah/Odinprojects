const menu = document.querySelector(".menu");
const dashboard = document.querySelector(".sidebar");

let closed = true;

menu.addEventListener("click", () => {
  if (closed) {
    dashboard.classList.remove("move");
    dashboard.style.transition = "transform .4s ease";
  } else {
    dashboard.classList.add("move");
    dashboard.style.transition = "transform .2s ease-out";
  }
  closed = !closed;
});

// window.addEventListener("resize", () => {
//   const width = window.innerWidth;
//   console.log(width);
//   if (width > "850px") {
//     dashboard.style.backgroundColor = "#555";
//   }
// });
