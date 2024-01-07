// selecting elements
const inputName = document.getElementsByClassName("input-Name")[0];
const inputEmail = document.getElementsByClassName("input-Email")[0];
const inputPassword = document.getElementsByClassName("input-Password")[0];
const submitCreationAccountBtn = document.getElementsByClassName(
  "submit-Creation-Account"
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
    if (user.userName === userName) {
      userNew = false;
      return;
    } else {
      console.log("times");
      userNew = true;
    }
  }
  if (userNew) {
    console.log("this user is new");
    createAccountStepTwo(userName, userEmail, userPass);
  }
};

// eventlinsters
submitCreationAccountBtn.addEventListener("click", createAccount);
