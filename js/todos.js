const todosLoad = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
};
todosLoad();
const displayTodos = (todos) => {
    const todosContiner = document.getElementById('todos-continer');
    for (todo of todos) {
        const div = document.createElement('div');
        div.classList.add('todo')
        div.innerHTML = ` 
        <h3>${todo.userId}</h3>
        <h3>${todo.title}</h3>
        <h4>${todo.completed}</h4>
        `
        todosContiner.appendChild(div)
    }
};