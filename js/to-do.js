const toDoPopUp = document.querySelector(".to-do__pop-up");
const toDoForm = document.querySelector(".to-do__form");
const toDoInput = document.querySelector(".to-do__input");
const toDoList = document.querySelector(".to-do__list");
const toDoBtn = document.querySelector(".to-do__btn");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  event.target.innerText = "✔";
  event.target.parentElement.childNodes[1].classList.add("line-through");

  const li = event.target.parentElement;
  setTimeout(() => li.remove(), 1000);

  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");

  li.id = newToDo.id;
  div.addEventListener("click", deleteToDo);
  span.innerText = newToDo.text;

  li.appendChild(div);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDoObj = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();

  toDoInput.value = "";
}

function handleToDoBtnClick() {
  toDoPopUp.classList.toggle(HIDDEN_CLASSNAME);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoBtn.addEventListener("click", handleToDoBtnClick);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}
