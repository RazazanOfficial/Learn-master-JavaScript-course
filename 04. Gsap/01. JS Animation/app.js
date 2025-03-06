const sideBar = document.querySelector(".sidebar");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  sideBar.classList.toggle("hide");
});
