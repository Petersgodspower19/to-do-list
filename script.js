document.addEventListener("DOMContentLoaded", function() {
  let todoButton = document.getElementById("todoButton");
  let todoValue = document.getElementById("todoInput");
  const toDoContainer = document.getElementById("todoContainer");

  todoButton.addEventListener("click", function(){
      if (todoValue.value === "") {
          alert("input a task");
          return;
      }
      let taskContainer = document.createElement("div");
      toDoContainer.appendChild(taskContainer);
      
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      taskContainer.appendChild(checkbox);

      let label = document.createElement("label");
      label.innerText = todoValue.value;
      taskContainer.appendChild(label);
      
      checkbox.addEventListener("change", function(){
        if (this.checked) {
          label.style.textDecoration = "line-through";
        } else {
          label.style.textDecoration = "none";
        }
      });

      taskContainer.addEventListener("dblclick", function() {
          toDoContainer.removeChild(taskContainer);
      });
  console.log(todoValue.value);
      todoValue.value = "";
    
  });
});
