// importing
import { accountLogout } from "./userDashboardLogic.js";

// our functions
export const userDashBoardTimer = () => {
  let minCount = 3;
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
  }, 200);
};

userDashBoardTimer();
