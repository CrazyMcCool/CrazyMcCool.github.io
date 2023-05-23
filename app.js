document.querySelector('#push').onclick = function() {
    var taskInput = document.querySelector('#newtask input');
    var taskName = taskInput.value.trim();
    
    if (taskName.length === 0) {
        alert("Kindly enter a task name!");
    } else if (taskName.length > 30) {
        alert("Task name should not exceed 30 characters!");
    } else {
        var taskCount = document.querySelectorAll('.task').length + 1;

        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span class="task-number">${taskCount}.</span>
                <span class="task-name">${taskName}</span>
                <button class="move-up">Up</button>
                <button class="move-down">Down</button>
                <button class="delete">Delete</button>
            </div>
        `;

        updateTaskNumbers();
        bindTaskButtons();
        
        taskInput.value = ''; 
    }
};

document.querySelector('#clear').onclick = function() {
    var tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = ''; // Clear all tasks
    updateTaskNumbers();
};

function updateTaskNumbers() {
    var taskNumbers = document.querySelectorAll('.task-number');
    for (var i = 0; i < taskNumbers.length; i++) {
        taskNumbers[i].textContent = (i + 1) + '.';
    }
}

function bindTaskButtons() {
    var currentTasks = document.querySelectorAll('.task');
    for (var i = 0; i < currentTasks.length; i++) {
        var task = currentTasks[i];

        task.querySelector('.delete').onclick = function() {
            this.parentNode.remove();
            updateTaskNumbers();
        };

        task.querySelector('.move-up').onclick = function() {
            var currentTask = this.parentNode;
            var previousTask = currentTask.previousElementSibling;
            if (previousTask) {
                currentTask.parentNode.insertBefore(currentTask, previousTask);
                updateTaskNumbers();
            }
        };

        task.querySelector('.move-down').onclick = function() {
            var currentTask = this.parentNode;
            var nextTask = currentTask.nextElementSibling;
            if (nextTask) {
                currentTask.parentNode.insertBefore(nextTask, currentTask);
                updateTaskNumbers();
            }
        };
    }
}
