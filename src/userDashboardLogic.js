//importing
import { userDashBoardTimer } from "./userDashboardTimer.js";
import { timeAndGreet } from "./timeAndGreet.js";
import { deleteAccount } from "./deleteAccountLogic.js";
import { getUserInformation } from "./requestMoneyLogic.js";
import { accountsDataObj } from "./createAccountLogic.js";

// selecting elements

// selecting pages :
const landingPageEl = document.getElementsByClassName("landing-Page")[0];
const dashboardPageEl = document.getElementsByClassName("dashboard-Page")[0];
const loading = document.getElementsByClassName("loading")[0];

// selecting titles :

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

// selected all bottom titles in and out and sort
const dashboardBottomLeftInWrap = document.getElementsByClassName(
  "dashboard-Bottom-Left-In-Wrap"
)[0];
const dashboardBottomLeftOutWrap = document.getElementsByClassName(
  "dashboard-Bottom-Left-Out-Wrap"
)[0];

// gelobal obj
let userInfo;
// functions

// show user data / info
export const showUserData = (userInfoObject) => {
  console.log("user loged in info is :", userInfoObject);

  // setting time function and greeting
  timeAndGreet(userInfoObject, true);

  // starting the timer
  userDashBoardTimer();

  // inserting data mid for transactions cards!
  let dataLoop = userInfoObject.date;
  userTransactions(dataLoop);

  // insterting data bottom
  // copying user info to other varibale for use of balance money update
  userInfo = userInfoObject;
  userTotalMoney(dataLoop, userInfo);

  // sending data to delete account if needed
  deleteAccount(userInfoObject, false);

  // seinding data of the user to loan logic file
  getUserInformation(userInfoObject);
};

//userTransactions
export const userTransactions = (dataLoop) => {
  // creating our data before the loop

  // the for each loop card!
  dataLoop.forEach((date) => {
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

    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();

    let userYear = parseInt(date.year, 10);
    let userMonth = parseInt(date.month, 10);
    let userDay = parseInt(date.day, 10);

    if (year == userYear && month == userMonth && day == userDay) {
      dateOfTransfer.textContent = `Today`;
    } else {
      userYear < 10 ? (userYear = `0${userYear}`) : userYear;
      userMonth < 10 ? (userMonth = `0${userMonth}`) : userMonth;
      userDay < 10 ? (userDay = `0${userDay}`) : userDay;
      dateOfTransfer.textContent = `${userDay}/${userMonth}/${userYear}`;
    }

    dashboardTransferCard.appendChild(dateOfTransfer);

    const amountOfTransfer = document.createElement("div");
    amountOfTransfer.classList.add("amount-Of-Transfer");
    amountOfTransfer.textContent = `${date.transaction}$`;
    dashboardTransferCard.appendChild(amountOfTransfer);

    dashboardMidLeftWrap.appendChild(dashboardTransferCard);
  });
};

// user total money
export const userTotalMoney = (dataLoop, userInfo) => {
  let minBalance = 0;
  let totalIncome = 0;
  console.log("our data loop", dataLoop);

  dataLoop.forEach((data) => {
    let transactions = data.transaction;
    transactions > 0
      ? (totalIncome += transactions)
      : (minBalance += transactions);
  });

  let gotUser = accountsDataObj.find((user) => {
    return user.userName === userInfo.userName;
  });

  let leftBalance = totalIncome - Math.abs(minBalance);
  dashboardTopRightText1.textContent = `${leftBalance}$`;
  dashboardBottomLeftInWrap.textContent = `in ${totalIncome}$`;
  dashboardBottomLeftOutWrap.textContent = `out ${minBalance}$`;
  console.log("this is total income: ", totalIncome);
  console.log("this is total minBalance: ", minBalance);
  console.log("this is  leftbalance: ", leftBalance);
  console.log("user found :", gotUser);
  gotUser.balance = leftBalance;
  console.log("this is our user:", gotUser);
  console.log("this is our accounts data obj", accountsDataObj);
  minBalance = 0;
  totalIncome = 0;
  leftBalance = 0;
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
