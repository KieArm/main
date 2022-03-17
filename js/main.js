// AOS Initialize
AOS.init({
  disable: "mobile",
});
// Popper Tooltip
const button = document.querySelector("#button");
const tooltip = document.querySelector("#tooltip");

const popperInstance = Popper.createPopper(button, tooltip, {
  placement: "bottom",
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ],
});

function show() {
  tooltip.setAttribute("data-show", "");
  popperInstance.setOptions({
    modifiers: [{ name: "eventListeners", enabled: true }],
  });
  popperInstance.update();
}

function hide() {
  tooltip.removeAttribute("data-show");
  popperInstance.setOptions({
    modifiers: [{ name: "eventListeners", enabled: false }],
  });
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach((event) => {
  button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  button.addEventListener(event, hide);
});
// Navbar Update on Scroll Position
const spyScrolling = () => {
  const sections = document.querySelectorAll(".scroll-bg");

  window.onscroll = () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector(".active").classList.remove("active");
        document.querySelector(`a[href*=${id}]`).classList.add("active");
      }
  };
};
spyScrolling();
