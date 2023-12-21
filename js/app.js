const chechboxs = document.querySelectorAll(".change-color");
const burger = document.querySelector(".burger");

const navbar = document.querySelector(".responsive-navbar");
chechboxs.forEach((chechbox) => {
  chechbox.addEventListener("input", (e) => {
    changeColor(e.target.checked);
  });
});

function changeColor(type) {
  if (!type) {
    document.documentElement.style.setProperty("--primary-color", "#23233b");
    document.documentElement.style.setProperty("--secondary-color", "#1c1c33");
    document.documentElement.style.setProperty("--light-color", "#f6f6f8");
    document.documentElement.style.setProperty("--white-color", "#fff");
  } else {
    document.documentElement.style.setProperty("--primary-color", "#f6f6f8");
    document.documentElement.style.setProperty("--secondary-color", "#fff");
    document.documentElement.style.setProperty("--light-color", "#23233b");
    document.documentElement.style.setProperty("--white-color", "#1c1c33");
  }
}

burger.addEventListener("click", (e) => {
  if (!navbar.classList.contains("active")) {
    burger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
  navbar.classList.toggle("active");
});
