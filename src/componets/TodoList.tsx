import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import Complete from './Complete'

interface Props {
    todos: Array<Todo>;
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
    completed : Array<Todo>;
    setCompleted : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos , setTodos , completed, setCompleted} : Props) => {
    return (
        <div className="container">
            {/* droppableId 이거 컴포넌트 이름 */}
            <div className='todos'>
                <span className="todos__heading">Active Tasks</span>
                {todos?.map((todo) => (
                    todo.isDone === false && 
                        <SingleTodo
                            todos={todos}
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                        />
                ))}
            </div>
            <div className="todos remove">
                <span className="todos__heading">
                    completed Tasks
                </span>
                {todos?.map((todo) => (
                    todo.isDone === true && 
                        <Complete
                            todos={todos}
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                        />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
