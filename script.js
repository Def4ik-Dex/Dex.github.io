// Перемикач теми
const themeSwitch = document.getElementById("themeSwitch");
const currentTheme = localStorage.getItem("theme");
const body = document.body;

if (currentTheme === "light") {
  body.classList.add("light");
  themeSwitch.checked = true;
}

themeSwitch.addEventListener("change", () => {
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});

// Завантаження свого фото
const uploadInput = document.getElementById("upload");
const avatarImg = document.getElementById("avatarImg");

uploadInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      avatarImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});