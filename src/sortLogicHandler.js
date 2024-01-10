// importing

// selecting elements
const dashboardBottomLeftSortBtn = document.getElementsByClassName(
  "dashboard-Bottom-Left-Sort-Btn"
)[0];

// gelobal varibales
let sortBoolean = true;
let ourUserData;
let sortedInfo = [];

// functions

//getting our user info
export const getUserInfo = (gotUser) => {
  ourUserData = gotUser;
};

const sortTransactions = () => {
  console.log(ourUserData.date.length);

  let sortedInfo = ourUserData.date.slice();

  if (sortBoolean) {
    sortBoolean = false;
    sortedInfo.sort((a, b) => b.transaction - a.transaction);
    console.log("Sorted data:", sortedInfo);
  } else {
    sortBoolean = true;
    sortedInfo.sort((a, b) => a.transaction - b.transaction);
    console.log("Sorted data:", sortedInfo);
  }
};

//events
dashboardBottomLeftSortBtn.addEventListener("click", sortTransactions);
