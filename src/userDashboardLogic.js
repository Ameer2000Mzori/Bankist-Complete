//importing
import { userDashboardTimer } from "./userDashboardTimer.js";
// selecting elements

// selecting pages :
const landingPageEl = document.getElementsByClassName("landing-Page")[0];
const dashboardPageEl = document.getElementsByClassName("dashboard-Page")[0];
const loading = document.getElementsByClassName("loading")[0];

// logout btn
const dashboardLogoutBtn = document.getElementsByClassName(
  "dashboard-Logout-Btn"
)[0];

// selecting titles :
const dashboardTopLeftText1 = document.getElementsByClassName(
  "dashboard-Top-Left-Text-1"
)[0];
const dashboardTopMidText2 = document.getElementsByClassName(
  "dashboard-Top-Mid-Text-2"
)[0];
const dashboardTopRightText1 = document.getElementsByClassName(
  "dashboard-Top-Right-Text-1"
)[0];

//  selecting element left of page where the cards should be inserted
const dashboardMidLeftWrap = document.getElementsByClassName(
  "dashboard-Mid-Left-Wrap"
)[0];

// selected all right buttons
const comfirmTransferBtn = document.getElementsByClassName(
  "comfirm-Transfer-Btn"
)[0];
const requestLoanBtn = document.getElementsByClassName("request-Loan-Btn")[0];
const comfirmConfirmPIN = document.getElementsByClassName(
  "comfirm-Confirm-PIN"
)[0];

// selected all bottom titles in and out and sort
const dashboardBottomLeftInWrap = document.getElementsByClassName(
  "dashboard-Bottom-Left-In-Wrap"
)[0];
const dashboardBottomLeftOutWrap = document.getElementsByClassName(
  "dashboard-Bottom-Left-Out-Wrap"
)[0];
const dashboardBottomLeftSortBtn = document.getElementsByClassName(
  "dashboard-Bottom-Left-Sort-Btn"
)[0];
const dashboardBottomText1 = document.getElementsByClassName(
  "dash-board-Bottom-Text-1"
)[0];

// data object

// functions

// show user data / info
export const showUserData = (userInfoObject) => {
  console.log("user loged in info is :", userInfoObject);
  userDashboardTimer();
  // Get an array of keys from the userInfoObject
  const keys = Object.keys(userInfoObject);

  // inserting data dynamiclly :
  dashboardTopLeftText1.textContent = userInfoObject.userName;
  dashboardTopMidText2.textContent = `this is time text`;
  dashboardTopRightText1.textContent = `${userInfoObject.balance}$`;

  // inserting data mid for transactions cards!
  let dataLoop = userInfoObject.date;
  userTransactions(dataLoop);

  // insterting data bottom
  userTotalMoney(dataLoop);

  // this is for date data!
};

//userTransactions
const userTransactions = (dataLoop) => {
  dataLoop.forEach((date) => {
    console.log(date);
    const dashboardTransferCard = document.createElement("div");
    dashboardTransferCard.classList.add("dashboard-Transfer-Card");

    const typeOfTransfer = document.createElement("div");
    typeOfTransfer.classList.add("type-Of-Transfer");
    typeOfTransfer.textContent = date.transaction < 0 ? "depost" : "income";
    typeOfTransfer.style.color = "white";
    typeOfTransfer.style.backgroundColor =
      date.transaction < 0 ? "red" : "green";
    dashboardTransferCard.appendChild(typeOfTransfer);

    const dateOfTransfer = document.createElement("div");
    dateOfTransfer.classList.add("date-Of-Transfer");
    dateOfTransfer.textContent = `${date.day}/${date.month}/${date.year}`;
    dashboardTransferCard.appendChild(dateOfTransfer);

    const amountOfTransfer = document.createElement("div");
    amountOfTransfer.classList.add("amount-Of-Transfer");
    amountOfTransfer.textContent = `${date.transaction}$`;
    dashboardTransferCard.appendChild(amountOfTransfer);

    dashboardMidLeftWrap.appendChild(dashboardTransferCard);
  });
};

// user total money
const userTotalMoney = (dataLoop) => {
  let minBalance = 0;
  let totalIncome = 0;

  dataLoop.forEach((data) => {
    let transactions = data.transaction;
    transactions > 0
      ? (totalIncome += transactions)
      : (minBalance += transactions);
  });

  dashboardBottomLeftInWrap.textContent = `in ${totalIncome}$`;
  dashboardBottomLeftOutWrap.textContent = `out ${minBalance}$`;
  console.log("this is total income: ", totalIncome);
  console.log("this is total minBalance: ", minBalance);
};

// login timer interval for elements to hide or unhide!
export const loginTimer = () => {
  landingPageEl.classList.add("active");
  loading.classList.remove("active");
  let loginCounter = 0;
  let logininterval = setInterval(() => {
    if (loginCounter < 10) {
      loginCounter++;
    } else {
      loginCounter = 0;
      clearInterval(logininterval);
      loading.classList.add("active");
      dashboardPageEl.classList.add("active");
    }
  }, 500);
};

// logout functions
const accountLogout = () => {
  dashboardPageEl.classList.remove("active");
  loading.classList.remove("active");
  let loginCounter = 0;

  let logininterval = setInterval(() => {
    if (loginCounter < 10) {
      loginCounter++;
    } else {
      loginCounter = 0;
      clearInterval(logininterval);
      landingPageEl.classList.remove("active");
      loading.classList.add("active");
    }
  }, 500);
};

// event linsters
dashboardLogoutBtn.addEventListener("click", accountLogout);

// html tree loop up
