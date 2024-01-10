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
const deleteAccount = () => {
  accountLogout();

  let userEmailInput = dashboardCardConfirmUser.value;
  let userPassInput = dashboardCardConfirmPIN.value;
  console.log("this is userEmail input", userEmailInput);
  console.log("this is userPass input", userPassInput);

  accountsDataObj = accountsDataObj.filter((user) => {
    user.userEmail !== userEmailInput && user.userPass !== userPassInput;
  });

  console.log("account deleted!");
  console.log("our user data after deletion: ", accountsDataObj);
};

// eventlinsters
comfirmConfirmPIN.addEventListener("click", deleteAccount);
