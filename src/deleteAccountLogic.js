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
  // this is user input
  let userEmailInput = dashboardCardConfirmUser.value;
  let userPassInput = dashboardCardConfirmPIN.value;

  // if user has put his right information or not!
  if (
    userInfoObject.userEmail === userEmailInput &&
    userInfoObject.userPass === userPassInput
  ) {
    if (checkStatus) {
      accountLogout();

      let indexToRemove = -1;

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
      userInfoObject = "";
    }
  } else {
    console.log("password or email wrong!");
  }

  // delete user envent button
  comfirmConfirmPIN.addEventListener("click", () => {
    deleteAccount(userInfoObject, true);
    userInfoObject = "";
  });
};
