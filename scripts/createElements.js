function createButton(ButtonDataArray) {
  const buttonItem = document
    .querySelector("#button_template")
    .content.cloneNode(true);

  const button = buttonItem.querySelector("button");
  const svg = buttonItem.querySelector("svg");
  const svgUse = svg.querySelector("use");

  button.setAttribute("type", ButtonDataArray.type);
  button.setAttribute("class", ButtonDataArray.buttonClass);

  if (ButtonDataArray.onclick) {
    button.setAttribute("onclick", ButtonDataArray.onclick);
  }

  if (ButtonDataArray.tabindex) {
    button.setAttribute("tabindex", ButtonDataArray.tabindex);
  }
  if (ButtonDataArray["aria-hidden"]) {
    button.setAttribute("aria-hidden", ButtonDataArray["aria-hidden"]);
  }
  if (ButtonDataArray["aria-label"]) {
    button.setAttribute("aria-label", ButtonDataArray["aria-label"]);
  }

  svg.setAttribute("class", ButtonDataArray.svgClass);
  svg.setAttribute("viewBox", ButtonDataArray.viewBox);

  svgUse.setAttribute("href", ButtonDataArray.svgHref);

  return buttonItem;
}

const buttonPlace = document.querySelector(".aside_area");

buttonData.forEach(function (index) {
  buttonPlace.append(createButton(index));
});
