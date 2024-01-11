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

  moneyRequested = Math.round(Number(moneyRequested));
  if (moneyRequested === 0) moneyRequested = 50;
  if (moneyRequested > 2000 || moneyRequested < 0) moneyRequested = 50;

  console.log(`before returning money  :`, moneyRequested);

  stringWithoutDecimal = moneyRequested;
  console.log(`after converting money  :`, stringWithoutDecimal);
  moneyRequested = "0";

  console.log(`after clearning money request   :`, moneyRequested);

  userRequestedMoney(stringWithoutDecimal);
  dashboardCardInputRequestLoan.value = "";
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

  let newTransaction = {
    day: `${day}`,
    month: `${month}`,
    year: `${year}`,
    transaction: stringWithoutDecimal,
  };
  ourUser.date.unshift(newTransaction);
  console.log(ourUser);
  dashboardMidLeftWrap.innerHTML = "";
  stringWithoutDecimal = "";
  dashboardBottomLeftInWrap.textContent = "";
  dashboardBottomLeftOutWrap.textContent = "";
  localStorage.setItem("accountsDataObj", JSON.stringify(accountsDataObj));
  console.log("this is our user data:", accountsDataObj);
  userTransactions(ourUser.date);
  userTotalMoney(ourUser.date, ourUser);
};

// event lisnters
requestLoanBtn.addEventListener("click", requestMoney);
