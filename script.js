// logic For adding task by clicking add task button

document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim(); // trim method for removing the extra space 

    //condition if task box is empty
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create new task element
    const li = document.createElement("li");
    li.className = "task";
    li.appendChild(document.createTextNode(taskText));

    // Add complete button 
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    completeBtn.style.backgroundColor = "#ffc107";
    completeBtn.style.color = "#fff";
    completeBtn.style.border = "none";
    completeBtn.style.borderRadius = "5px";
    completeBtn.style.padding = "5px";
    completeBtn.style.cursor = "pointer";

    // Mark task as completed
    completeBtn.addEventListener("click", function() {
        li.classList.toggle("complete");
    });

    li.appendChild(completeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
});


