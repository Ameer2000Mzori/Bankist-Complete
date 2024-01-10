// importing
import { accountsDataObj } from "./createAccountLogic.js";

// selected btn // selected inputs
const requestLoanBtn = document.getElementById("request-Loan-Btn");
const dashboardCardInputRequestLoan = document.getElementById(
  "dashboard-Card-Input-Request-Loan"
);
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
    return user.userName === "Ameer";
  });
  ourUser && ourUser ? makeNewTransaction() : console.log("no user found");
};

// makeNewTransaction function
const makeNewTransaction = () => {
  console.log(`user Found`);
};

userRequestedMoney();
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
