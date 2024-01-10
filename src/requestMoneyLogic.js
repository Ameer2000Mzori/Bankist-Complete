// selected btn // selected inputs
const requestLoanBtn = document.getElementById("request-Loan-Btn");
const dashboardCardInputRequestLoan = document.getElementById(
  "dashboard-Card-Input-Request-Loan"
);
// gelobal varibales
let userInfo;
let moneyRequested;

// functions
export const getUserInformation = (userInfoObject) => {
  userInfo = userInfoObject;
};

// request money
const requestMoney = () => {
  console.log(userInfo);
};
// event lisnters
requestLoanBtn.addEventListener("click", requestMoney);
dashboardCardInputRequestLoan.addEventListener("input", (e) => {
  let moneyRequested = e.data;

  if (moneyRequested.includes(".")) {
    moneyRequested = moneyRequested;
  }
  console.log(moneyRequested);
});
