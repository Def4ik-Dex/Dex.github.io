const themeSwitch = document.getElementById("themeSwitch");
const body = document.body;

// Завантажити збережену тему
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeSwitch.checked = true;
}

// Обробник кліку
themeSwitch.addEventListener("change", () => {
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});

// Завантаження фото
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