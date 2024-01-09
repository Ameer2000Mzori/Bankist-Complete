// selecting elements
const dashboardBottomText1 = document.getElementsByClassName(
  "dash-board-Bottom-Text-1"
)[0];
// logout btn
const dashboardLogoutBtn = document.getElementsByClassName(
  "dashboard-Logout-Btn"
)[0];

let minCount = 0;
let seconds = 0;

// our functions
export const userDashBoardTimer = () => {
  minCount = 10;
  seconds = 0;
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
  }, 50);
};

// logout functions
let accountLogout = () => {
  dashboardPageEl.classList.remove("active");
  loading.classList.remove("active");
  let loginCounter = 0;
  clearInterval(timerInterval);
  minCount = 0;
  seconds = 0;

  let logininterval = setInterval(() => {
    if (loginCounter < 10) {
      loginCounter++;
    } else {
      loginCounter = 0;
      clearInterval(logininterval);
      landingPageEl.classList.remove("active");
      loading.classList.add("active");
    }
  }, 500);
};

// event linsters
dashboardLogoutBtn.addEventListener("click", accountLogout);
