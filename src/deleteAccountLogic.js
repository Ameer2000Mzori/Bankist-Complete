// imports
import { accountsDataObj } from "./createAccountLogic.js";
import { accountLogout } from "./userDashboardTimer.js";

// selected btn // selected inputs
const comfirmConfirmPIN = document.getElementById("comfirm-Confirm-PIN");
const dashboardCardConfirmUser = document.getElementById(
  "dashboard-Card-Confirm-User"
);
const dashboardCardConfirmPIN = document.getElementById(
  "dashboard-Card-Confirm-PIN"
);
const notificationMessageEl = document.getElementsByClassName(
  "notification-Message"
)[0];
// gelobal varibales
let btnCount = 0;
let userInfo;

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
    deleteUser(userInfoObject, checkStatus, userEmailInput, userPassInput);
  }
};

// delete user logic
const deleteUser = (
  checkStatus,
  userInfoObject,
  userEmailInput,
  userPassInput
) => {
  accountLogout();
  let indexToRemove = -1;
  accountsDataObj.forEach((user, index) => {
    if (user.userEmail === userEmailInput && user.userPass === userPassInput) {
      indexToRemove = index;
    }
  });

  if (indexToRemove !== -1) {
    accountsDataObj.splice(indexToRemove, 1);
    localStorage.setItem("accountsDataObj", JSON.stringify(accountsDataObj));
  }

  // test
  console.log("after delete users data object:", accountsDataObj);
  // cleaning up everything after deletation
  cleanUpInputs(userInfoObject, userInfo, userEmailInput, userPassInput);
  // notification
  deletedAccountNotification();
};

// cleaning up inputs function
export const cleanUpInputs = (
  userInfoObject,
  userInfo,
  userEmailInput,
  userPassInput
) => {
  userInfo = "";
  userInfoObject = "";
  userEmailInput = dashboardCardConfirmUser.value = "";
  userPassInput = dashboardCardConfirmPIN.value = "";
};

// deleted account notification

const deletedAccountNotification = () => {
  notificationMessageEl.style.backgroundColor = "green";
  notificationMessageEl.style.color = "black";
  notificationMessageEl.textContent = "ACCOUNT DELETED!";
  notificationMessageEl.classList.add("active");
  let notificationCount = 0;
  let notificationInterVal = setInterval(() => {
    if (notificationCount < 5) {
      notificationCount++;
    } else {
      clearInterval(notificationInterVal);
      notificationMessageEl.classList.remove("active");
    }
  }, 1000);
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
