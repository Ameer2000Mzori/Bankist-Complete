// importing

// selecting elements
const dashboardBottomLeftSortBtn = document.getElementsByClassName(
  "dashboard-Bottom-Left-Sort-Btn"
)[0];

// gelobal varibales
let sortBoolean = false;
let ourUserData;

// functions

//getting our user info
export const getUserInfo = (gotUser) => {
  ourUserData = gotUser;
};

const sortTransactions = () => {
  console.log(ourUserData.date[0]);
  let sortedInfo = [];
  let lowestNumber = ourUserData.date[0];
  if (!sortBoolean) {
    sortBoolean = true;
    for (let i = 0; i < ourUserData.date.length; i++) {
      if (lowestNumber < ourUserData.date[i]) {
        lowestNumber = ourUserData.date[i];
        sortedInfo.push(lowestNumber);
        console.log(lowestNumber);
      }
    }
  }
  console.log("sorted data:", sortedInfo);
};

//events
dashboardBottomLeftSortBtn.addEventListener("click", sortTransactions);
