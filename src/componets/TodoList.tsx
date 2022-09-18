import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import Complete from './Complete'

interface Props {
    todos: Array<Todo>;
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos , setTodos } : Props) => {
    return (
        <div className="container">
            <div className='todos'>
                <span className="todos__heading">Active</span>
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
                    complete
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
