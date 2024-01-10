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

// functions
let btnCount = 0;

// this is delete account function
export const deleteAccount = (userInfoObject, checkStatus) => {
  // this is user input
  let userEmailInput = dashboardCardConfirmUser.value;
  let userPassInput = dashboardCardConfirmPIN.value;

  // if user has put his right information or not!
  userInfoObject.userEmail === userEmailInput &&
  userInfoObject.userPass === userPassInput
    ? deleteAccountFunction(
        userInfoObject,
        checkStatus,
        userEmailInput,
        userPassInput
      )
    : console.log("password or email wrong!");

  // delete user envent button
  comfirmConfirmPIN.addEventListener("click", () => {
    deleteAccount(userInfoObject, true);
    let disableBtnTime = setInterval(() => {
      if (btnCount < 10) {
        btnCount++;
        comfirmConfirmPIN.disabled = true;
      } else {
        btnCount = 0;
        clearInterval(disableBtnTime);
        comfirmConfirmPIN.disabled = false;
      }
    }, 1000);
    userInfoObject = "";
  });
};

// delte account logic
const deleteAccountFunction = (
  userInfoObject,
  checkStatus,
  userEmailInput,
  userPassInput
) => {
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

    userInfoObject = "";
    userEmailInput = dashboardCardConfirmUser = "";
    userPassInput = dashboardCardConfirmPIN = "";
  }
};
