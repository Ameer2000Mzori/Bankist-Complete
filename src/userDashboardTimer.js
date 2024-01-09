// importing
import { accountLogout } from "./userDashboardLogic.js";

// selecting elements
const dashboardBottomText1 = document.getElementsByClassName(
  "dash-board-Bottom-Text-1"
)[0];

// our functions
export const userDashBoardTimer = () => {
  let minCount = 10;
  let seconds = 0;

  let timerInterval = setInterval(() => {
    if (minCount > 0) {
      if (seconds > 0) {
        seconds--;
        console.log(seconds, minCount);
      } else {
        seconds = 60;
        minCount--;
      }
    } else {
      console.log("logged out!");
      clearInterval(timerInterval);
      accountLogout();
    }
    dashboardBottomText1.textContent = `You will be logged out in 0${minCount}:${seconds}`;
  }, 1000);
};
