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

// eventlinsters
submitCreationAccountBtn.addEventListener("click", createAccount);
