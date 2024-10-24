window.onscroll = function () {
  var button = document.getElementById("back-to-top");

  if (window.innerWidth > 768) {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  } else {
    button.style.display = "none";
  }
};
