import React , {useState} from 'react';
import './App.css';
import InputFeild from './componets/InputFeild';
import TodoList from './componets/TodoList';
import { Todo } from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const App  = () => {
  const [todo , setTodo] = useState<string>("");
  const [todos , setTodos] = useState<Todo[]>([]);
  
  const [completed , setCompleted] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

 
  const onDragEnd = (result: DropResult) => {
      const { destination, source } = result;
      if (!destination) {
        return;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      let add;
      let active = todos;
      let complete = completed;

      // Source Logic
      if (source.droppableId === "TodosList") {
        add = active[source.index];
        active.splice(source.index, 1);
      } else {
        add = complete[source.index];
        complete.splice(source.index, 1);
      }

      // Destination Logic
      if (destination.droppableId === "TodosList") {
        active.splice(destination.index, 0, add);
      } else {
        complete.splice(destination.index, 0, add);
      }

      setCompleted(complete);
      setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
          <h1>hello world </h1>
          <span className="heading">Taskify</span>
          <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputFeild>
          <TodoList todos = {todos} setTodos = {setTodos} completed={completed} setCompleted={setCompleted}></TodoList>
      </div>
    </DragDropContext>
  );
}

export default App;
