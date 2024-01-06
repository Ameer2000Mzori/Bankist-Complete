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
const changeOperationCard = (index) => {
  // remove all active classes from all selected elements
  operationsTextWrap.forEach((operationBtn) => {
    operationBtn.classList.remove("active");
  });
  // add active class to that clicked element
  operationsTextWrap[index].classList.add("active");

  // inster and put the right data in to the element
  operationsBottomIcon.classList = `${operData[index].icon}`;
  operationsBottomText1.textContent = `${operData[index].title}`;
  operationsBottomText2.textContent = `${operData[index].description}`;
};

// event linsters
operationsTextWrap.forEach((operationBtn, index) => {
  operationBtn.addEventListener("click", () => changeOperationCard(index));
});
changeOperationCard(0);
//
//
//
//   Customers //
//
//
// selecting elements
const customerBottomsLRIds = document.querySelectorAll(
  "#customer-Bottoms-L-R-Ids"
);
const customersCardsHolderEl = document.getElementsByClassName(
  "customers-Cards-Holder"
)[0];
const customerBottomBtns = document.querySelectorAll(".customer-Bottom-Btns");

// gelobal variables
slideCount = 0;

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
