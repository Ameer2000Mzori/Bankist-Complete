// selecting elements
const dashboardTopLeftText1 = document.getElementsByClassName(
  "dashboard-Top-Left-Text-1"
)[0];
const dashboardTopMidText2 = document.getElementsByClassName(
  "dashboard-Top-Mid-Text-2"
)[0];

// this is time and greet func
export const timeAndGreet = (userInfoObject) => {
  setInterval(timeAndGreating, 1000);
  let userName = userInfoObject.userName;
  timeAndGreating(userName);
};

// time and greeting func
const timeAndGreating = (userName) => {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();

  let greetingWord =
    hour >= 0 && hour < 6
      ? "Good Night!"
      : hour >= 6 && hour < 12
      ? "Good Morning!"
      : hour >= 12 && hour < 18
      ? "Good Afternoon!"
      : "Good Evening!";

  // greeting the user on the time hes
  dashboardTopLeftText1.textContent = `${greetingWord} ${userName}`;

  // setting the 0 before each number that is lower then 10
  month < 10 ? (month = `0${month}`) : month;
  day < 10 ? (day = `0${day}`) : day;
  hour < 10 ? (hour = `0${hour}`) : hour;
  min < 10 ? (min = `0${min}`) : min;

  // the date text under balance text
  dashboardTopMidText2.textContent = `As of ${day}/${month}/${year}, ${hour}:${min}`;
};
