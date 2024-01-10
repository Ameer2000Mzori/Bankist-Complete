// imports
import { accountsDataObj } from "./createAccountLogic.js";
import { accountLogout } from "./userDashboardTimer.js";

// selecting elements

// selected btn
// delete user
const comfirmConfirmPIN = document.getElementById("comfirm-Confirm-PIN");

// selected inputs
const dashboardCardConfirmUser = document.getElementById(
  "dashboard-Card-Confirm-User"
);

const dashboardCardConfirmPIN = document.getElementById(
  "dashboard-Card-Confirm-PIN"
);

// gelobal varibales

// functions

// this is delete account function
export const deleteAccount = (userInfoObject, checkStatus) => {
  if (checkStatus) {
    accountLogout();
    let userEmailInput = dashboardCardConfirmUser.value;
    let userPassInput = dashboardCardConfirmPIN.value;
    console.log("this is userEmail input", userEmailInput);
    console.log("this is userPass input", userPassInput);

    let indexToRemove = -1;

    if (
      userInfoObject.userEmail === userEmailInput &&
      userInfoObject.userPass === userEmailInput
    ) {
      accountsDataObj.forEach((user, index) => {
        if (
          user.userEmail === userEmailInput &&
          user.userPass === userPassInput
        ) {
          indexToRemove = index;
        }
      });

      if (indexToRemove !== -1) {
        accountsDataObj.splice(indexToRemove, 1);
      }

      console.log("account deleted!");
      console.log("our user data after deletion: ", accountsDataObj);
      console.log("this is user data inside of true", userInfoObject);
    } else {
      console.log("your email or password is worng");
    }
  } else {
    console.log("this is user data inside of false", userInfoObject);
  }
};

// delete user envent
comfirmConfirmPIN.addEventListener("click", () => {
  deleteAccount(true, true);
});
