// importing
import { timeAndGreet } from "./timeAndGreet.js";
import { cleanUpInputs } from "./deleteAccountLogic.js";

// selecting pages :
const landingPageEl = document.getElementsByClassName("landing-Page")[0];
const dashboardPageEl = document.getElementsByClassName("dashboard-Page")[0];
const loading = document.getElementsByClassName("loading")[0];

// selecting elements
const dashboardBottomText1 = document.getElementsByClassName(
  "dash-board-Bottom-Text-1"
)[0];
const dashboardMidLeftWrap = document.getElementsByClassName(
  "dashboard-Mid-Left-Wrap"
)[0];

// logout btn
const dashboardLogoutBtn = document.getElementsByClassName(
  "dashboard-Logout-Btn"
)[0];

let minCount = 0;
let seconds = 0;

// our functions
export const userDashBoardTimer = () => {
  minCount = 5;
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
  }, 1000);
};

// logout functions
export let accountLogout = () => {
  dashboardPageEl.classList.remove("active");
  loading.classList.remove("active");
  let loginCounter = 0;
  minCount = 0;
  seconds = 0;
  dashboardMidLeftWrap.innerHTML = ``;
  cleanUpInputs();

  let logininterval = setInterval(() => {
    if (loginCounter < 10) {
      loginCounter++;
    } else {
      timeAndGreet(false, false);
      loginCounter = 0;
      clearInterval(logininterval);
      landingPageEl.classList.remove("active");
      loading.classList.add("active");
    }
  }, 500);
};

// event linsters
dashboardLogoutBtn.addEventListener("click", accountLogout);
