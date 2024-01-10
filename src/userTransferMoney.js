// importing
import { accountsDataObj } from "./createAccountLogic.js";
import { userTotalMoney, userTransactions } from "./userDashboardLogic.js";

// selecting elements // comfirm transfer money
const comfirmTransferBtn = document.getElementById("comfirm-Transfer-Btn");
const dashboardCardInputAmount = document.getElementById(
  "dashboard-Card-Input-Amount"
);
const dashboardCardInputTransfer = document.getElementById(
  "dashboard-Card-Input-Transfer"
);

// gelobal variables
let userInfoCpy;

// functions

// copyig and storing user info to userInfoCpy
export const getLoggedInUserData = (userInfoObject) => {
  userInfoCpy = userInfoObject;
};

const getUserTransferamount = () => {
  // checking the user info if we have it in data base
  let transferUserName = dashboardCardInputTransfer.value;
  let foundedTransferUser;
  if (userInfoCpy.userName !== transferUserName) {
    foundedTransferUser = accountsDataObj.find(
      (user) => user.userName == transferUserName
    );
  } else {
    console.log("enter only other users name");
  }

  if (foundedTransferUser) {
    console.log("user found:", foundedTransferUser);
  } else {
    console.log("sorry user not found", foundedTransferUser);
  }
  // getting user input
  //   let requestedMoneyTransfer = dashboardCardInputAmount.value;
  //   // rounding and checking the user input type
  //   requestedMoneyTransfer = Math.round(Number(requestedMoneyTransfer));
  //   if (requestedMoneyTransfer === 0) requestedMoneyTransfer = 50;
  //   if (requestedMoneyTransfer > 2000 || requestedMoneyTransfer < 0)
  //     requestedMoneyTransfer = 50;
  //   console.log("this is before clean up everyhting ", requestedMoneyTransfer);
  //   requestedMoneyTransfer = dashboardCardInputAmount.value = "";
  //   console.log("this is after clean up everyhting ", requestedMoneyTransfer);
};

// events
comfirmTransferBtn.addEventListener("click", getUserTransferamount);
