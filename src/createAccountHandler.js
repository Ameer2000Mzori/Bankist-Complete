// selecting elements
const openAccountsBtns = document.querySelectorAll("#open-Accounts-Btns");
const accountEl = document.getElementsByClassName("account")[0];
const closeCreateAccountCardBtn = document.getElementsByClassName(
  "close-Create-Account-Card"
)[0];

// gelobal varibales

// functions
const openCardHandler = () => {
  openCard();
};

// this is for opning the card function
const openCard = () => {
  accountEl.classList.add("active");
};

// this is for closing the card function
const closeCard = () => {
  accountEl.classList.remove("active");
};

// eventlinsters
openAccountsBtns.forEach((openAccountBtn) => {
  openAccountBtn.addEventListener("click", openCardHandler);
});
closeCreateAccountCardBtn.addEventListener("click", closeCard);
