function initTheme() {
  const savedTheme = localStorage.getItem("userTheme");

  if (savedTheme) {
    document.body.classList.toggle("dark_theme", savedTheme === "dark");
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("dark_theme", prefersDark);

    localStorage.setItem("userTheme", prefersDark ? "dark" : "light");
  }
}

initTheme();

/* --------------------------------------------------------------------------------------- */

function toggleTheme() {
  document.body.classList.toggle("dark_theme");

  const currentTheme = document.body.classList.contains("dark_theme")
    ? "dark"
    : "light";
  localStorage.setItem("userTheme", currentTheme);
}

/* --------------------------------------------------------------------------------------- */

const themeSwitcherButton = document.querySelector(".theme-toggle_button");
themeSwitcherButton.addEventListener("click", toggleTheme);

/* --------------------------------------------------------------------------------------- */

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light";
    document.body.classList.toggle("dark_theme", newTheme === "dark");
    localStorage.setItem("userTheme", newTheme);
  });
