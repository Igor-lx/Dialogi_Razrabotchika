window.onscroll = function () {
  const upButton = document.getElementById("up-button");

  if (window.innerWidth > 768) {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      upButton.style.display = "flex";
    } else {
      upButton.style.display = "none";
    }
  } else {
    upButton.style.display = "none";
  }
};
