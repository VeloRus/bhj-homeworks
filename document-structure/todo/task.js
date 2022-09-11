const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksList.addEventListener('click', (event) => {
    if(event.target.classList.contains('task__remove')) {
        event.target.closest('div').remove()
    }
})
const task = (element) => {
    element.insertAdjacentHTML('beforeend', `
    <div class="task">
        <div class="task__title">${taskInput.value}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>
`)
}

const addTask = () => {
    task(tasksList)
}

tasksAdd.addEventListener( 'click', (event)=> {
    event.preventDefault()
    if(taskInput.value.trim().length !== 0) {
        addTask()
    }
    taskInput.value = ''
})
