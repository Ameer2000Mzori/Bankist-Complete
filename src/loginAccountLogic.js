// imports
import accountsDataObj from "./createAccountLogic.js";
// selecting elements
const loginEmailInput = document.getElementById("login-Email-Input");
const loginPasswordInput = document.getElementById("login-Password-Input");
const submitLoginBtn = document.getElementsByClassName("submit-Login-Btn")[0];

// functions
const loginToAccount = () => {
  let loginUserEmail = loginEmailInput.value;
  let loginUserPass = loginPasswordInput.value;

  const matchingObject = accountsDataObj.find(
    (obj) => obj.userName === loginUserEmail && obj.userPass === loginUserPass
  );

  console.log("matchingObject:", matchingObject);
};

// eventlinsters
submitLoginBtn.addEventListener("click", loginToAccount);
