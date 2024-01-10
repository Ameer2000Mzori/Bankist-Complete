// selected btn // selected inputs
const requestLoanBtn = document.getElementById("request-Loan-Btn");

// gelobal varibales
let userInfo;
// functions
export const getUserInformation = () => {
  userInfo = userInfoObject;
};

// request money
const requestMoney = () => {
  console.log(userInfo);
};
// event lisnters
requestLoanBtn.addEventListener("click", requestMoney);
