// importing
import { accountsDataObj } from "./createAccountLogic.js";
import { userTotalMoney, userTransactions } from "./userDashboardLogic.js";
import { checkUserInput } from "./requestMoneyLogic.js";

// selecting elements // comfirm transfer money
const comfirmTransferBtn = document.getElementById("comfirm-Transfer-Btn");
const dashboardCardInputRequestLoan = document.getElementById(
  "dashboard-Card-Input-Request-Loan"
);

// gelobal variables

// functions
export const getLoggedInUserData = (userInfoObject) => {
  console.log("this is the accounts data in transfer money:", accountsDataObj);
  console.log("this is the user data in transfer money:", userInfoObject);
};

const getUserTransferamount = () => {
  let requestedMoneyTransfer = "10";
  checkUserInput(requestedMoneyTransfer);
  let moneyconvert = Number(requestedMoneyTransfer);
  console.log("this is money convert:", moneyconvert);
  requestedMoneyTransfer = "0";
  console.log(
    "this is requestedMoneyTransfer after cleaning:",
    requestedMoneyTransfer
  );
};

// events
comfirmTransferBtn.addEventListener("click", getUserTransferamount);
