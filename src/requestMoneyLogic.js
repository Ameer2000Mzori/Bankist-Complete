// importing
import { userInfoObject } from "./userDashboardLogic.js";

// selected btn // selected inputs
const requestLoanBtn = document.getElementsByClassName("request-Loan-Btn")[0];

// gelobal varibales
let userInfo;
// functions
const getUserInformation = () => {
  userInfo = userInfoObject;
};

// request money
const requestMoney = () => {
  console.log(userInfo);
};
// event lisnters
requestLoanBtn.addEventListener("click", requestMoney);
