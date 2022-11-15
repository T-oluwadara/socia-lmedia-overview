const checkBox = document.querySelector("#toggle");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkBox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};

toggleDarkMode();
checkBox.addEventListener("click", toggleDarkMode);
