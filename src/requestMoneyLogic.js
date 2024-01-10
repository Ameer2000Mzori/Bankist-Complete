// importing
import { accountsDataObj } from "./createAccountLogic.js";
import { userTransactions, userTotalMoney } from "./userDashboardLogic.js";

// selected btn // selected inputs
const requestLoanBtn = document.getElementById("request-Loan-Btn");
const dashboardCardInputRequestLoan = document.getElementById(
  "dashboard-Card-Input-Request-Loan"
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
// gelobal varibales
let userInfo;
let moneyRequested;
let stringWithoutDecimal;

// functions
export const getUserInformation = (userInfoObject) => {
  userInfo = userInfoObject;
};

// request money
const requestMoney = () => {
  // getting data
  moneyRequested = dashboardCardInputRequestLoan.value;
  checkUserInput(stringWithoutDecimal);
  console.log(`after returning money  :`, stringWithoutDecimal);

  userRequestedMoney(stringWithoutDecimal);
};
// this is userRequestedMoney function
const userRequestedMoney = (stringWithoutDecimal) => {
  console.log(accountsDataObj);

  let ourUser = accountsDataObj.find((user) => {
    return user.userName === userInfo.userName;
  });
  ourUser && ourUser
    ? makeNewTransaction(ourUser, stringWithoutDecimal)
    : console.log("no user found");
};

// makeNewTransaction function
const makeNewTransaction = (ourUser, stringWithoutDecimal) => {
  console.log(`user Found`, ourUser);
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let numriInput = Number(stringWithoutDecimal);

  let newTransaction = {
    day: `${day}`,
    month: `${month}`,
    year: `${year}`,
    transaction: numriInput,
  };
  ourUser.date.unshift(newTransaction);
  console.log(ourUser);
  dashboardMidLeftWrap.innerHTML = "";
  stringWithoutDecimal = "";
  dashboardBottomLeftInWrap.textContent = "";
  dashboardBottomLeftOutWrap.textContent = "";
  console.log("this is our user data:", accountsDataObj);
  userTransactions(ourUser.date);
  userTotalMoney(ourUser.date, ourUser);
};

// check user requested type of money
const checkUserInput = () => {
  stringWithoutDecimal = moneyRequested.replace(/\./g, "");
  if (stringWithoutDecimal === "") {
    stringWithoutDecimal = 50;
    dashboardCardInputRequestLoan.value = 50;
  }
  if (stringWithoutDecimal >= 1000 || stringWithoutDecimal < 0) {
    stringWithoutDecimal = 50;
    dashboardCardInputRequestLoan.value = 50;
  }
  dashboardCardInputRequestLoan.value = stringWithoutDecimal;
  return stringWithoutDecimal;
};
// event lisnters
requestLoanBtn.addEventListener("click", requestMoney);
