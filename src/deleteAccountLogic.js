// imports
import { accountsDataObj } from "./createAccountLogic.js";

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
const deleteAccount = () => {
  console.log("account deleted!");
};

// eventlinsters
comfirmConfirmPIN.addEventListener("click", deleteAccount);
