const form = document.getElementById("form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const charCount = document.getElementById("char-count");
const MAX_CHARS = 50

input.addEventListener("input", () => {
    if (input.value.length > MAX_CHARS) {
      input.value = input.value.slice(0, MAX_CHARS); 
    }
  
    const length = input.value.length;
    charCount.textContent = `${length} / ${MAX_CHARS}`;
  });
  

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const taskText = input.value.trim();
  const charLength = taskText.length 
  
  if (taskText === "") {
    alert("Please enter a task"); 
    return;
  }

  const li = document.createElement("li"); 
  li.textContent = taskText;

  list.appendChild(li); 
  
//reset
  input.value = ""; 
  charCount.textContent = `0 / ${MAX_CHARS}`;
  

  
});





