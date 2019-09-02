import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // console.log(response.data);
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logData(id, title, completed)
});

const logData = (id: number, title: , completed) => {
  console.log(
    `
    Todo with ID : ${id}
    Todo with title : ${title}
    Todo with finished : ${completed}
    `
  )
}