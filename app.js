const form = document.getElementById("form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const charCount = document.getElementById("char-count");
const stats = document.getElementById("stats");
const comp = document.getElementById("comp")
const MAX_CHARS = 50
let completedCount = 0

input.addEventListener("input", () => {
    if (input.value.length > MAX_CHARS) {
      input.value = input.value.slice(0, MAX_CHARS); 
    }
  
    const letterLength = input.value.length;
    if (letterLength <= MAX_CHARS) {charCount.textContent = `${letterLength} / ${MAX_CHARS}`;} 
    
    
  });
  

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const taskText = input.value.trim();

  
  if (taskText === "") {
    alert("Please enter a task"); 
    return;
  }

//CREATE LIST
  const li = document.createElement("li"); 
  li.textContent = taskText;

  
  li.addEventListener("click", ()=> {
    
    //create a count variable then count the truths then the text contnt
    //of the p is now the count 
    const isCompleted =li.classList.toggle("completed");
    completedCount += isCompleted ? 1 : -1;

        // update completed tasks

  // const completedCount = document.querySelectorAll("#task-list li.completed").length
  comp.textContent= `Completed Tasks = ${completedCount}`
});

//DELETE TASKS
 const removeButton = document.createElement('button')
 removeButton.textContent= "DELETE"
 removeButton.classList.add('delete-btn')

removeButton.addEventListener('click', (e)=>{
  e.stopPropagation();

   // if deleting a completed task, update count
   if (li.classList.contains("completed")) {
    completedCount--;
    comp.textContent = `Completed Tasks = ${completedCount}`;
  }

  li.remove();
  stats.textContent = list.children.length

})

  list.appendChild(li); 
  li.appendChild(removeButton);
  //update stats
  stats.textContent = list.children.length;

  
 //reset
  input.value = ""; 
  charCount.textContent = `0 / ${MAX_CHARS}`;

  
});





