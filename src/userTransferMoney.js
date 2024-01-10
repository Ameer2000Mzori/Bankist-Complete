// importing
import { accountsDataObj } from "./createAccountLogic.js";
import { userTotalMoney, userTransactions } from "./userDashboardLogic.js";
import { checkUserInput } from "./requestMoneyLogic.js";

// selecting elements // comfirm transfer money
const comfirmTransferBtn = document.getElementById("comfirm-Transfer-Btn");
const dashboardCardInputAmount = document.getElementById(
  "dashboard-Card-Input-Amount"
);

// gelobal variables

// functions
export const getLoggedInUserData = (userInfoObject) => {
  console.log("this is the accounts data in transfer money:", accountsDataObj);
  console.log("this is the user data in transfer money:", userInfoObject);
};

const getUserTransferamount = () => {
  let requestedMoneyTransfer = dashboardCardInputAmount.value;
  checkUserInput(requestedMoneyTransfer);
  console.log("this is return before convert:", requestedMoneyTransfer);
  let moneyconvert = Number(requestedMoneyTransfer);
  console.log("this is money convert:", moneyconvert);
  requestedMoneyTransfer = dashboardCardInputAmount.value = "";
  console.log("this is after clean up everyhting ", requestedMoneyTransfer);
};

// events
comfirmTransferBtn.addEventListener("click", getUserTransferamount);
