const loginDiv = document.querySelector(".login");
const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__input");
const mainContentDiv = document.querySelector(".main-content");
const usernameDiv = document.querySelector(".username");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const paintUsername = (username) => {
  usernameDiv.innerText = `${username}`;
  mainContentDiv.classList.remove(HIDDEN_CLASSNAME);
};

const handleLoginFormSubmit = (event) => {
  event.preventDefault();
  loginDiv.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintUsername(loginInput.value);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername) {
  paintUsername(savedUsername);
} else {
  loginDiv.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
}
