document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("add-task");
  const newTaskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
      });

      li.appendChild(deleteButton);
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      taskList.appendChild(li);
      newTaskInput.value = "";
    }
  });

  newTaskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });
});
