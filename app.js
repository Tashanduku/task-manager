const form = document.getElementById("form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 
const inputText = input.value.trim();

if (inputText === "") {
    alert("Task cannot be empty"); 
    return;
  }

const li = document.createElement('li');
li.textContent =inputText;

list.appendChild('li')

input.value = "";
});