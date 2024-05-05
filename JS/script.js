const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const todoName = inputElement.value;
  
  todoList.push(todoName);

  inputElement.value = '';

  for (let index = 0; index <= todoList.length -1; index++) {
    const value = todoList[index];
    console.log(value);
  }
}