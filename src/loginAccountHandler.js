// selecting elements
const loginBtn = document.getElementById("login-Btn");
const loginEl = document.getElementsByClassName("login")[0];

// gelobal varibales

// functions
const openLoginCard = () => {
  loginEl.classList.add("active");
};

// eventlinsters
loginBtn.addEventListener("click", openLoginCard);
