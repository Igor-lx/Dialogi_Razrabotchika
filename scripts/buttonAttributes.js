const buttonData = [
  {
    name: "GALAXY button",

    type: "button",
    buttonClass: "wrapper-button galaxy_button",
    tabindex: "-1",
    "aria-hidden": "true",
    svgClass: "aside_left_icon",
    viewBox: "0 0 24 24",
    //viewBox: "0 0 70 70",
    svgHref: "./images/svg/themes.svg#auto",
    //svgHref: "./images/svg/galaxy.svg#galaxy",
  },

  {
    name: "THEME-TOGGLE button",

    type: "button",
    buttonClass: "wrapper-button theme-toggle_button",
    "aria-label": "переключить тему",
    svgClass: "aside_right_icon theme_icon",
    viewBox: "0 0 24 24",
    svgHref: "./images/svg/themes.svg#auto",
  },

  {
    name: "COPYRIGHT button",

    type: "button",
    buttonClass: "wrapper-button copyright_button",
    tabindex: "-1",
    "aria-hidden": "true",
    svgClass: "aside_left_icon",
    viewBox: "0 0 36 32",
    svgHref: "./images/svg/copyright.svg#copyright",
  },

  {
    name: "UP-BUTTON",

    type: "button",
    buttonClass: "wrapper-button up-button",
    onclick: "location.href='#top'",
    "aria-label": "навех страницы",
    svgClass: "aside_right_icon up_icon",
    viewBox: "0 0 24 24",
    svgHref: "./images/svg/arrow-up.svg#up",
  },
];
