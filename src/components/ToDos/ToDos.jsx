import React, {useState} from 'react';
import s from './ToDos.module.sass';
import ToDoList from '../ToDoList';
import AddToDo from '../AddToDo';

export default function ToDos() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Everyday'
    },
    {
      id: 2,
      title: 'Work',
      description: 'Everyday!'
    },
    {
      id: 3,
      title: 'Sleep',
      description: 'What is sleep? '
    }
  ]);

  const addToDo = (id, title, description) => {
    setTodo(prev => [...prev, { id, title, description }]);
  };

  const deleteTodo = id => {
    setTodo(prev => prev.filter(t => t.id !== id));
  };
  return (
    <div className={s.todos}>
      <h1>Дела на сегодня!</h1>
      <p>Терпение и труд все, я устал!</p>
      <AddToDo addToDo={addToDo}/>
      <ToDoList todo={todo} deleteTodo={deleteTodo} />
    </div>
  )
}
