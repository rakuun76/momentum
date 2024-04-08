const loginForm = document.querySelector(".login-form");
const loginFormInput = document.querySelector(".login-form__input");
const loginGreeting = document.querySelector(".login-greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const paintGreetings = (username) => {
  loginGreeting.innerText = `Hello ${username}`;
  loginGreeting.classList.remove(HIDDEN_CLASSNAME);
};

const handleLoginFormSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginFormInput.value);
  paintGreetings(loginFormInput.value);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername) {
  paintGreetings(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
}
