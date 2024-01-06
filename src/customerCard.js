// selecting elements
const customerBottomsLRIds = document.querySelectorAll(
  "#customer-Bottoms-L-R-Ids"
);
const customersCardsHolderEl = document.getElementsByClassName(
  "customers-Cards-Holder"
)[0];
const customerBottomBtns = document.querySelectorAll(".customer-Bottom-Btns");

// gelobal variables
let slideCount = 0;

// functions
const changeCustomerCard = (index) => {
  customerBottomBtns.forEach((customerBBtn) => {
    customerBBtn.classList.remove("active");
  });
  customersCardsHolderEl.style.transform = `translateX(-${index}00%)`;
  customerBottomBtns[index].classList.add("active");
};

// dots logic
const dotBottomStylingLogic = (index) => {
  index === 0
    ? slideCount >= 1
      ? slideCount--
      : (slideCount = customerBottomBtns.length - 1)
    : slideCount < 2
    ? slideCount++
    : (slideCount = 0);
  changeCustomerCard(slideCount);
};

// event linsters
customerBottomsLRIds.forEach((lrBtns, index) => {
  lrBtns.addEventListener("click", () => dotBottomStylingLogic(index));
});

customerBottomBtns.forEach((customerDownBtn, index) => {
  customerDownBtn.addEventListener("click", () =>
    changeCustomerCard((slideCount = index))
  );
});
