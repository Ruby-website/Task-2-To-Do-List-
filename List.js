document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keydown', function(event) {
    if(event.key === 'Enter') addTodo();
});

function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task === '') return;

    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = task;
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
}