const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskText}<span class="delete-btn">X</span>`;
        
        li.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(li);
        });
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
}


const completedTaskList = document.getElementById('completedTaskList');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskText}<span class="delete-btn">X</span>`;
        
        const completeBtn = document.createElement('span');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Complete';
        li.appendChild(completeBtn);
        
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                completedTaskList.appendChild(li);
            } else {
                taskList.appendChild(li);
            }
        });
        
        li.querySelector('.delete-btn').addEventListener('click', () => {
            if (li.classList.contains('completed')) {
                completedTaskList.removeChild(li);
            } else {
                taskList.removeChild(li);
            }
        });
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
