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
  console.log();
})();
// functions

// delete account data holder
export const userDeleteAccountData = (userInfoObject) => {
  console.log(`got the data :`, userInfoObject);
  let newObj = userInfoObject;
  console.log("after putting the data inside new object:", newObj);
};

// this is delete account function
const deleteAccount = () => {
  console.log(
    "this is the logged in user info in delete account:",
    userInfoObject
  );
  accountLogout();

  let userEmailInput = dashboardCardConfirmUser.value;
  let userPassInput = dashboardCardConfirmPIN.value;
  console.log("this is userEmail input", userEmailInput);
  console.log("this is userPass input", userPassInput);

  let indexToRemove = -1;

  accountsDataObj.forEach((user, index) => {
    if (user.userEmail === userEmailInput && user.userPass === userPassInput) {
      indexToRemove = index;
    }
  });

  if (indexToRemove !== -1) {
    accountsDataObj.splice(indexToRemove, 1);
  }

  console.log("account deleted!");
  console.log("our user data after deletion: ", accountsDataObj);
};

// eventlinsters
comfirmConfirmPIN.addEventListener("click", deleteAccount);
