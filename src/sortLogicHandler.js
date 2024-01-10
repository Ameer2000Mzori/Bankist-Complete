// importing

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

  let sortedInfo = ourUserData.date.slice();

  if (sortStage === 0) {
    sortStage++;
    sortedInfo.sort((a, b) => b.transaction - a.transaction);
    console.log("Sorted data:", sortedInfo);
  } else if (sortStage === 1) {
    sortStage++;
    console.log("sort stage:", sortBoolean);
    sortedInfo.sort((a, b) => a.transaction - b.transaction);
    console.log("Sorted data:", sortedInfo);
  } else {
    sortStage = 0;
    console.log("our normal data:", ourUserData.date);
  }
};

//events
dashboardBottomLeftSortBtn.addEventListener("click", sortTransactions);
