window.onscroll = function () {
  const upButton = document.getElementById("up-button");
  const copyright = document.getElementById("copyright");

  if (window.innerWidth > 768) {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      upButton.style.display = "flex";
      copyright.style.display = "flex";
    } else {
      upButton.style.display = "none";
      copyright.style.display = "none";
    }
  } else {
    upButton.style.display = "none";
    copyright.style.display = "none";
  }
};
