const dashboardTopLeftText1 = document.getElementsByClassName(
  "dashboard-Top-Left-Text-1"
)[0];
const dashboardTopMidText2 = document.getElementsByClassName(
  "dashboard-Top-Mid-Text-2"
)[0];

// this is time and greet func
export const timeAndGreet = () => {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();

  let timeInterval = setInterval(() => {
    console.log(year, month, day, hour, min);
  }, 1000);

  // setting the 0 before each number that is lower then 10
  month < 10 ? (month = `0${month}`) : month;
  day < 10 ? (day = `0${day}`) : day;
  hour < 10 ? (hour = `0${hour}`) : hour;
  min < 10 ? (min = `0${min}`) : min;

  console.log(year, month, day, hour, min);
  //   dashboardTopLeftText1.textContent = userInfoObject.userName;
  dashboardTopMidText2.textContent = `As of ${day}/${month}/${year}, ${hour}:${min}`;
};
