function showButtonsOnscroll() {
  const copyrightButton = document.querySelector(".copyright_button");
  const upButton = document.querySelector(".up-button");

  if (window.innerWidth > 768) {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      copyrightButton.style.display = "flex";
      upButton.style.display = "flex";
    } else {
      copyrightButton.style.display = "none";
      upButton.style.display = "none";
    }
  } else {
    copyrightButton.style.display = "none";
    upButton.style.display = "none";
  }
}

window.onscroll = showButtonsOnscroll;
window.onresize = showButtonsOnscroll;

showButtonsOnscroll();
