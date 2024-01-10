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
let userInfo;
// this is delete account function
export const deleteAccount = (userInfoObject, checkStatus) => {
  // this is user input
  let userEmailInput = dashboardCardConfirmUser.value;
  let userPassInput = dashboardCardConfirmPIN.value;

  // this is user info object

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
  userInfo = userInfoObject;
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

    // testing the code
    console.log("this is data accounts object :", accountsDataObj);
    console.log("this is data user object :", userInfoObject);
    console.log("this is data user check status :", checkStatus);
    console.log("this is data user user email input :", userEmailInput);
    console.log("this is data user user pass input  :", userPassInput);

    // cleaning up everything after deletation
    userInfo = "";
    userInfoObject = "";
    userEmailInput = dashboardCardConfirmUser.value = "";
    userPassInput = dashboardCardConfirmPIN.value = "";
  }
};

// delete user envent button

comfirmConfirmPIN.addEventListener("click", () => {
  // sent data to the delet account func
  deleteAccount(userInfo, true);

  // start the interval of 5 seconds disablaing
  let disableBtnTime = setInterval(() => {
    if (btnCount < 10) {
      btnCount++;
      console.log("btn disabled");

      comfirmConfirmPIN.disabled = true;
    } else {
      console.log("btn enabled");

      btnCount = 0;
      clearInterval(disableBtnTime);
      comfirmConfirmPIN.disabled = false;
    }
  }, 500);
});
