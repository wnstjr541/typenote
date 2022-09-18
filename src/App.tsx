import React , {useState} from 'react';
import './App.css';
import InputFeild from './componets/InputFeild';
import TodoList from './componets/TodoList';
import { Todo } from './model';

const App  = () => {
  const [todo , setTodo] = useState<string>("");
  const [todos , setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  return (
    <div className="App">
        <span className="heading">note</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputFeild>
        <TodoList todos = {todos} setTodos = {setTodos} ></TodoList>
    </div>
  );
}

export default App;
