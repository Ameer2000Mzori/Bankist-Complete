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
  accountEl.classList.contains("active") ? closeCard() : openCard();
};

// this is for opning the card function
const openCard = () => {
  accountEl.classList.add("active");
  accountOverlayEl.classList.add("active");
  accountOverlayClickEl.classList.add("active");
};

// this is for closing the card function
const closeCard = () => {
  accountEl.classList.remove("active");
  accountOverlayEl.classList.remove("active");
  accountOverlayClickEl.classList.remove("active");
};

// eventlinsters
openAccountsBtns.forEach((openAccountBtn) => {
  openAccountBtn.addEventListener("click", openCardHandler);
});
