// importing
import { accountsDataObj } from "./createAccountLogic.js";

// selecting elements
const dashboardBottomLeftSortBtn = document.getElementsByClassName(
  "dashboard-Bottom-Left-Sort-Btn"
)[0];

// gelobal varibales
let sortStage = 0;
let ourUserData;
let sortedInfo = [];

// functions

//getting our user info
export const getUserInfo = (gotUser) => {
  ourUserData = gotUser;
};

const sortTransactions = () => {
  console.log(ourUserData.date.length);

  // new copy of our user data
  let sortedInfo = ourUserData.date.slice();
  let userFound = accountsDataObj.find((user) => {
    return user.userName === ourUserData.userName;
  });

  sortTransactionsLogic(sortedInfo);

  console.log("founded user:", userFound);
  console.log("users accounts ", accountsDataObj);
};

// sortTransactionsLogic
const sortTransactionsLogic = () => {
  if (sortStage === 0) {
    sortStage++;
    console.log("sort stage:", sortStage);
    sortedInfo.sort((a, b) => b.transaction - a.transaction);
    console.log("Sorted data:", sortedInfo);
    return sortedInfo;
  } else if (sortStage === 1) {
    sortStage++;
    console.log("sort stage:", sortStage);
    sortedInfo.sort((a, b) => a.transaction - b.transaction);
    console.log("Sorted data:", sortedInfo);
    return sortedInfo;
  } else {
    sortStage = 0;
    console.log("sort stage:", sortStage);
    console.log("our normal data:", ourUserData.date);
    return ourUserData.date;
  }
};
//events
dashboardBottomLeftSortBtn.addEventListener("click", sortTransactions);
