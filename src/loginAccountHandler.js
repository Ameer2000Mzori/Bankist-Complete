// selecting elements
const loginBtn = document.getElementById("login-Btn");
const loginEl = document.getElementsByClassName("login")[0];
const loginCloseBtn = document.getElementsByClassName("login-Close-Btn")[0];

// functions

// open login card
const openLoginCard = () => {
  loginEl.classList.add("active");
};

// close login card
const closeLoginCard = () => {
  loginEl.classList.remove("active");
};

// eventlinsters
loginBtn.addEventListener("click", openLoginCard);
loginCloseBtn.addEventListener("click", closeLoginCard);
