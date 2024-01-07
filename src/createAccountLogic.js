// selecting elements
const accountEl = document.getElementsByClassName("account")[0];
const accountOverlayEl = document.getElementsByClassName("account-Overlay")[0];
const accountOverlayClickEl = document.getElementsByClassName(
  "account-Overlay-Click"
)[0];

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
const accountsDataObj = [
  {
    userName: "Ameer",
    userEmail: "Ameer",
    userPass: "Ameer",
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
      alreadyTakenNotifyMessage();
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
  };

  accountsDataObj.push(newAccount);
  console.log(accountsDataObj);
  console.log(userName, userEmail, userPass);
  cleanInputs(userName, userEmail, userPass);
};

// clean up the inputs function
const cleanInputs = (userName, userEmail, userPass) => {
  userName = inputName.value = "";
  userEmail = inputEmail.value = "";
  userPass = inputPassword.value = "";
  accountEl.classList.remove("active");
  accountOverlayEl.classList.remove("active");
  accountOverlayClickEl.classList.remove("active");
};

let nitoCount = 0;
// already take account function :
const alreadyTakenNotifyMessage = () => {
  console.log("account already taken");
  notificationMessageEl.style.backgroundColor = "red";
  notificationMessageEl.textContent = "account already taken";
  notificationMessageEl.classList.add("active");

  let startNitificationInterval = setInterval(() => {
    if (nitoCount < 10) {
      nitoCount++;
    } else {
      nitoCount = 0;
      notificationMessageEl.classList.remove("active");
      clearInterval(startNitificationInterval);
    }
  }, 100);
};

// eventlinsters
submitCreationAccountBtn.addEventListener("click", createAccount);
