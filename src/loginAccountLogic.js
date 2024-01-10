// imports
import { accountsDataObj } from "./createAccountLogic.js";
import { loginTimer, showUserData } from "./userDashboardLogic.js";

// selecting elements
const loginEmailInput = document.getElementById("login-Email-Input");
const loginPasswordInput = document.getElementById("login-Password-Input");
const submitLoginBtn = document.getElementsByClassName("submit-Login-Btn")[0];
const notificationMessageEl = document.getElementsByClassName(
  "notification-Message"
)[0];
const loginEl = document.getElementsByClassName("login")[0];

// functions
const loginToAccount = () => {
  let loginUserEmail = loginEmailInput.value;
  let loginUserPass = loginPasswordInput.value;

  let matchingObject = accountsDataObj.find(
    (obj) => obj.userEmail === loginUserEmail && obj.userPass === loginUserPass
  );

  matchingObject ? userFound(matchingObject) : userNotFoundNoty();
};

// user found function
const userFound = (matchingObject) => {
  console.log("the user data is :", matchingObject);
  userFoundNoty(matchingObject);
};

const userNotFoundNoty = () => {
  notificationMessageEl.style.backgroundColor = "red";
  notificationMessageEl.textContent = "USER NOT FOUND";
  notificationMessageEl.classList.add("active");
  userNoty();
  cleanInputs(loginEmailInput, loginPasswordInput);
};

// account created
const userFoundNoty = (matchingObject) => {
  notificationMessageEl.style.backgroundColor = "green";
  notificationMessageEl.style.color = "black";
  notificationMessageEl.textContent = "LOGGED IN";
  notificationMessageEl.classList.add("active");
  userNoty();
  showUserData(matchingObject);
  loginTimer();
  cleanInputs(loginEmailInput, loginPasswordInput);
  matchingObject = "";
};

let nitoCount = 0;
// start userFindNoty
const userNoty = () => {
  let startNitificationInterval = setInterval(() => {
    if (nitoCount < 15) {
      nitoCount++;
    } else {
      nitoCount = 0;
      notificationMessageEl.classList.remove("active");
      clearInterval(startNitificationInterval);
    }
  }, 100);
};

// clean up the inputs function
const cleanInputs = (loginEmailInput, loginPasswordInput) => {
  loginEmailInput.value = "";
  loginPasswordInput.value = "";
  loginEl.classList.remove("active");
};

// eventlinsters
submitLoginBtn.addEventListener("click", loginToAccount);
