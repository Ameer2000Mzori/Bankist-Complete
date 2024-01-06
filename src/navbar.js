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
