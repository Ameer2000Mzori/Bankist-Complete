// selecting elements
const openAccountsBtns = document.querySelectorAll("#open-Accounts-Btns");
const accountEl = document.getElementsByClassName("account")[0];
const accountOverlayEl = document.getElementsByClassName("account-Overlay")[0];
const accountOverlayClickEl = document.getElementsByClassName(
  "account-overlay-Click"
)[0];

// gelobal varibales

// functions
const openCardHandler = () => {
  console.log("wow");
};

// eventlinsters
openAccountsBtns.forEach((openAccountBtn) => {
  openAccountBtn.addEventListener("click", openCardHandler);
});
