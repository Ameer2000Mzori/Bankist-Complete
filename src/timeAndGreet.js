const dashboardTopLeftText1 = document.getElementsByClassName(
  "dashboard-Top-Left-Text-1"
)[0];
const dashboardTopMidText2 = document.getElementsByClassName(
  "dashboard-Top-Mid-Text-2"
)[0];

// this is time and greet func
export const timeAndGreet = (userInfoObject) => {
  dashboardTopLeftText1.textContent = userInfoObject.userName;
  dashboardTopMidText2.textContent = `this is time text`;
};
