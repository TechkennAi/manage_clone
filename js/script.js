let hamburger = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
hamburger.addEventListener("click", function () {
  let open = hamburger.classList.contains("open");
  if (open === true) {
    hamburger.classList.remove("open");
    menu.classList.add("hidden");
  } else {
    hamburger.classList.add("open");
    menu.classList.remove("hidden");
  }
});
