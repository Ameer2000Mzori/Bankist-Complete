// selecting elements
const dashboardTopLeftText1 = document.getElementsByClassName(
  "dashboard-Top-Left-Text-1"
)[0];
const dashboardTopMidText2 = document.getElementsByClassName(
  "dashboard-Top-Mid-Text-2"
)[0];

let userName;
let timeAndGreetInterval;
// this is time and greet func
export const timeAndGreet = (userInfoObject, greet) => {
  // greeting the user!
  userName = userInfoObject.userName;
  // loggedin boolean

  // our interval to change greeting text and date dynamiclly!
  if (greet) {
    timeAndGreetInterval = setInterval(() => {
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let hour = time.getHours();
      let min = time.getMinutes();

      // check what time is it so we can greet the user!
      let greetingWord =
        hour >= 0 && hour < 6
          ? "Good Night!"
          : hour >= 6 && hour < 12
          ? "Good Morning!"
          : hour >= 12 && hour < 18
          ? "Good Afternoon!"
          : "Good Evening!";

      // checking if each one of them is not under 10 so we can add 0
      month < 10 ? (month = `0${month}`) : month;
      day < 10 ? (day = `0${day}`) : day;
      hour < 10 ? (hour = `0${hour}`) : hour;
      min < 10 ? (min = `0${min}`) : min;

      // the date text under balance text

      dashboardTopLeftText1.textContent = `${greetingWord} ${userName}`;
      dashboardTopMidText2.textContent = `As of ${day}/${month}/${year}, ${hour}:${min}`;
    }, 1000);
  } else {
    console.log("stopped timer!");
    clearInterval(timeAndGreetInterval);
    userName = ``;
  }
};
