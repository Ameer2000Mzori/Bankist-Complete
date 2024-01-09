// imports
import { loginTimer, showUserData } from "./userDashboardLogic.js";

// selecting elements
const accountEl = document.getElementsByClassName("account")[0];

const inputName = document.getElementsByClassName("input-Name")[0];
const inputEmail = document.getElementsByClassName("input-Email")[0];
const inputPassword = document.getElementsByClassName("input-Password")[0];
const submitCreationAccountBtn = document.getElementsByClassName(
  "submit-Creation-Account"
)[0];
const notificationMessageEl = document.getElementsByClassName(
  "notification-Message"
)[0];

// gelobal varibales
let userNew = true;
export const accountsDataObj = [
  {
    userName: "Ameer",
    userEmail: "Ameer",
    userPass: "Ameer",
    date: [
      {
        day: "9",
        month: "1",
        year: "2024",
        transaction: 100,
      },
      {
        day: "8",
        month: "1",
        year: "2024",
        transaction: 500,
      },
      {
        day: "3",
        month: "1",
        year: "2024",
        transaction: -100,
      },
    ],
    currency: "$",
    balance: "500",
  },
];

// functions
const createAccount = () => {
  let userName = inputName.value;
  let userEmail = inputEmail.value;
  let userPass = inputPassword.value;
  checkData(userName, userEmail, userPass);
};

// check data if there is same name or email in the object data
const checkData = (userName, userEmail, userPass) => {
  for (let user of accountsDataObj) {
    if (user.userName === userName || user.userEmail === userEmail) {
      userNew = false;
      alreadyTakenNotifyMessage(false);
      console.log("user name or email is already taken");
      return;
    } else {
      userNew = true;
    }
  }
  userName && createAccountStepTwo(userName, userEmail, userPass);
};

// here is when the data goes to the object accounts  and local storage save
const createAccountStepTwo = (userName, userEmail, userPass) => {
  console.log("account created!");
  let newAccount = {
    userName,
    userEmail,
    userPass,
    date: [],
    currency: "$",
    balance: "0",
  };

  loginTimer();
  accountsDataObj.push(newAccount);
  alreadyTakenNotifyMessage(true);
  checkUser(userName, userEmail, userPass);
  console.log(accountsDataObj);
};

// checkuser function, sending data to dashboard logic
const checkUser = (userName, userEmail, userPass) => {
  let matchingObject = accountsDataObj.find(
    (obj) =>
      obj.userName === userName &&
      obj.userEmail === userEmail &&
      obj.userPass === userPass
  );

  showUserData(matchingObject);
  cleanInputs(userName, userEmail, userPass);
  matchingObject = "";
};

// clean up the inputs function
const cleanInputs = (userName, userEmail, userPass) => {
  userName = inputName.value = "";
  userEmail = inputEmail.value = "";
  userPass = inputPassword.value = "";
  accountEl.classList.remove("active");
};

let nitoCount = 0;
// already take account function :
const alreadyTakenNotifyMessage = (checkNotigy) => {
  checkNotigy ? accountCreated() : accountTake();

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

//  account taken
const accountTake = () => {
  console.log("account already taken");
  notificationMessageEl.style.backgroundColor = "red";
  notificationMessageEl.textContent = "account already taken";
  notificationMessageEl.classList.add("active");
};

// account created
const accountCreated = () => {
  console.log("account created!");
  notificationMessageEl.style.backgroundColor = "green";
  notificationMessageEl.style.color = "black";
  notificationMessageEl.textContent = "account created";
  notificationMessageEl.classList.add("active");
};
// eventlinsters
submitCreationAccountBtn.addEventListener("click", createAccount);
