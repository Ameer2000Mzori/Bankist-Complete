// imports
import { accountsDataObj } from "./createAccountLogic.js";
import { accountLogout } from "./userDashboardTimer.js";

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
let btnCount = 0;
let userInfo;

// functions

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

    // cleaning up everything after deletation
    cleanUpInputs(userInfo, userInfoObject, userEmailInput, userPassInput);
  }
};

// delete user envent button

comfirmConfirmPIN.addEventListener("click", () => {
  // sent data to the delet account func
  deleteAccount(userInfo, true);

  // start the interval of 5 seconds disablaing
  let disableBtnTime = setInterval(() => {
    if (btnCount < 10) {
      console.log("button disabled");
      btnCount++;
      comfirmConfirmPIN.disabled = true;
    } else {
      console.log("button disabled");
      btnCount = 0;
      clearInterval(disableBtnTime);
      comfirmConfirmPIN.disabled = false;
    }
  }, 500);
});

// cleaning up inputs function
const cleanUpInputs = (
  userInfo,
  userInfoObject,
  userEmailInput,
  userPassInput
) => {
  // testing the code
  // console.log("this is data accounts object :", accountsDataObj);
  // console.log("this is data user object :", userInfoObject);
  // console.log("this is data user check status :", checkStatus);
  // console.log("this is data user user email input :", userEmailInput);
  // console.log("this is data user user pass input  :", userPassInput);
  // cleaning up
  userInfo = "";
  userInfoObject = "";
  userEmailInput = dashboardCardConfirmUser.value = "";
  userPassInput = dashboardCardConfirmPIN.value = "";
};
