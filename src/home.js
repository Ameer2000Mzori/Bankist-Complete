//   NAVBAR //
//
//
// selecting elements
const burgerMenuWrap = document.getElementsByClassName("burger-Menu-Wrap")[0];
const navRightLinksWrapEl = document.getElementsByClassName(
  "nav-Right-Links-Wrap"
)[0];

// functions
const openNav = () => {
  navRightLinksWrapEl.classList.toggle("active");
};

// event linsters
burgerMenuWrap.addEventListener("click", openNav);
//
//
//
//   Operations //
//
//
// selecting elements

// data object
const operData = [
  {
    icon: "fa-solid fa-phone",
    title: "Tranfser money to anyone, instantly! No fees, no BS.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

// functions

// event linsters
