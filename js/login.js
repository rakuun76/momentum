const loginDiv = document.querySelector(".login");
const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__input");
const mainContentDiv = document.querySelector(".main-content");
const usernameDiv = document.querySelector(".username");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const handleLoginFormSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  usernameDiv.innerText = `${loginInput.value}`;
  loginDiv.classList.add("fade-out");
};

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername) {
  usernameDiv.innerText = `${savedUsername}`;
  mainContentDiv.classList.remove(HIDDEN_CLASSNAME);
} else {
  loginDiv.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
}

document.addEventListener("animationend", (event) => {
  if (event.animationName === "fade-out") {
    event.target.classList.add(HIDDEN_CLASSNAME);
    mainContentDiv.classList.add("fade-in");
    mainContentDiv.classList.remove(HIDDEN_CLASSNAME);
  }
});
