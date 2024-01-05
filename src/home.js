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
const operationsBottomIcon = document.getElementById(
  "operations-Bottom-Text-Wrap-Left-Icon"
);
const operationsBottomText1 = document.getElementsByClassName(
  "operations-Bottom-Text-1"
)[0];
const operationsBottomText2 = document.getElementsByClassName(
  "operations-Bottom-Text-2"
)[0];
const operationsTextWrap = document.querySelectorAll(".operations-Text-Wrap");

// data object
const operData = [
  {
    icon: "fa-solid fa-phone",
    title: "Tranfser money to anyone, instantly! No fees, no BS.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "fa-solid fa-user",
    title: "Buy a home or make your dreams come true, with instant loans.    ",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: "fa-solid fa-download",
    title: "No longer need your account? No problem! Close it instantly.",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

// functions

// event linsters
