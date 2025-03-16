document.addEventListener("DOMContentLoaded", () => {
  // Select form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Ignore empty input

    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => taskItem.remove());

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
  });
});