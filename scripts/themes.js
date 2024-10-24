function toggleTheme() {
  document.body.classList.toggle("dark_theme");
}
const themeSwitcherButton = document.querySelector(".theme-toggle_button");

themeSwitcherButton.addEventListener("click", toggleTheme);
