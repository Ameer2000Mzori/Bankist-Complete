// importing
import { accountsDataObj } from "./createAccountLogic.js";
import { userTotalMoney, userTransactions } from "./userDashboardLogic.js";

// selecting elements // comfirm transfer money
const comfirmTransferBtn = document.getElementById("comfirm-Transfer-Btn");
const dashboardCardInputAmount = document.getElementById(
  "dashboard-Card-Input-Amount"
);
const dashboardCardInputTransfer = document.getElementById(
  "dashboard-Card-Input-Transfer"
);
const dashboardMidLeftWrap = document.getElementsByClassName(
  "dashboard-Mid-Left-Wrap"
)[0];
const dashboardBottomLeftInWrap = document.getElementsByClassName(
  "dashboard-Bottom-Left-In-Wrap"
)[0];
const dashboardBottomLeftOutWrap = document.getElementsByClassName(
  "dashboard-Bottom-Left-Out-Wrap"
)[0];

// gelobal variables
let userInfoCpy;
let userFound;

// functions

// copyig and storing user info to userInfoCpy
export const getLoggedInUserData = (userInfoObject) => {
  userInfoCpy = userInfoObject;
};

const getUserTransferamount = () => {
  // checking the user info if we have it in data base
  let transferUserName = dashboardCardInputTransfer.value;
  let foundedTransferUser;

  checkUser(transferUserName, foundedTransferUser);

  // cleaning up and passing the data to other function
  console.log("after returning user infos", transferUserName, userFound);
  transferUserName = dashboardCardInputTransfer.value = "";
  console.log("after cleaning up user infos", transferUserName, userFound);
};

// user inputs transfer money logic
const userTransferMoney = () => {
  // getting user input
  let requestedMoneyTransfer = dashboardCardInputAmount.value;
  // rounding and checking the user input type
  requestedMoneyTransfer = Math.round(Number(requestedMoneyTransfer));
  if (requestedMoneyTransfer === 0) requestedMoneyTransfer = 50;
  if (requestedMoneyTransfer > 2000 || requestedMoneyTransfer < 0)
    requestedMoneyTransfer = 50;
  console.log("this is before clean up everyhting ", requestedMoneyTransfer);
  console.log("our user copy balance,", userInfoCpy.balance);
  if (userInfoCpy.balance > requestedMoneyTransfer) {
    console.log("you have enough money");
    changeSentUserMoneyData(userInfoCpy, requestedMoneyTransfer);
    changeReciveUserData(userFound, requestedMoneyTransfer);
    userFound = "";
  } else {
    console.log("no enough money");
  }
  requestedMoneyTransfer = dashboardCardInputAmount.value = "";
  console.log("this is after clean up everyhting ", requestedMoneyTransfer);
};

// our logged in user function
const changeSentUserMoneyData = (userInfoCpy, requestedMoneyTransfer) => {
  console.log(`user sent moeny `, userInfoCpy);
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  requestedMoneyTransfer = -requestedMoneyTransfer;

  let newTransaction = {
    day: `${day}`,
    month: `${month}`,
    year: `${year}`,
    transaction: requestedMoneyTransfer,
  };
  userInfoCpy.date.unshift(newTransaction);
  dashboardMidLeftWrap.innerHTML = "";
  dashboardBottomLeftInWrap.textContent = "";
  dashboardBottomLeftOutWrap.textContent = "";
  localStorage.setItem("accountsDataObj", JSON.stringify(accountsDataObj));
  console.log("this is our user data:", accountsDataObj);
  userTransactions(userInfoCpy.date);
  userTotalMoney(userInfoCpy.date, userInfoCpy);
};

// the user that is gonna recive money
const changeReciveUserData = (userFound, requestedMoneyTransfer) => {
  console.log(`user recived money :`, userFound);
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();

  let newTransaction = {
    day: `${day}`,
    month: `${month}`,
    year: `${year}`,
    transaction: requestedMoneyTransfer,
  };
  userFound.date.unshift(newTransaction);
  localStorage.setItem("accountsDataObj", JSON.stringify(accountsDataObj));
  console.log("this is our user data:", accountsDataObj);
};

// check user function
const checkUser = (transferUserName, foundedTransferUser) => {
  if (userInfoCpy.userName !== transferUserName) {
    foundedTransferUser = accountsDataObj.find(
      (user) => user.userName == transferUserName
    );
  } else {
    console.log("enter only other users name");
  }

  if (foundedTransferUser) {
    userFound = foundedTransferUser;
    console.log("before return user info", foundedTransferUser);
    userTransferMoney();
    return userFound;
  } else {
    console.log("sorry user not found", foundedTransferUser);
  }
};

// events
comfirmTransferBtn.addEventListener("click", getUserTransferamount);
