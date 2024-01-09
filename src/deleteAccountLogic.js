// imports
import { accountsDataObj } from "./createAccountLogic.js";
import { accountLogout } from "./userDashboardTimer.js";

// selecting elements

// selected btn
const comfirmConfirmPIN = document.getElementById("comfirm-Confirm-PIN");

// selected inputs
const dashboardCardConfirmUser = document.getElementById(
  "dashboard-Card-Confirm-User"
);

const dashboardCardConfirmPIN = document.getElementById(
  "dashboard-Card-Confirm-PIN"
);

// gelobal varibales
(() => {
  console.log(accountsDataObj);
})();
// functions

// this is delete account function
const deleteAccount = (accountsDataObj) => {
  let userEmail = dashboardCardConfirmUser.value;
  let userPass = dashboardCardConfirmPIN.value;

  accountsDataObj = accountsDataObj.filter((users) => {
    users.userEmail !== userEmail && users.userPass !== userPass;
  });
  accountLogout();
  console.log("our new account data object");
  console.log("account deleted!");
};

// eventlinsters
comfirmConfirmPIN.addEventListener("click", deleteAccount);
