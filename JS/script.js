const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const todoName = inputElement.value;
  
  todoList.push(todoName);

  inputElement.value = '';

  for (let i = 0; i <= todoList.length; i++) {
    const value = todoList[i];
    console.log(value);
  }
}