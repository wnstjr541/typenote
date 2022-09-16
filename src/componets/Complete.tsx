import React  from 'react';
import { Todo } from '../model';
import {  AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Complete = ({  todo , todos , setTodos}:Props) => {
    
    
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };
    return (
            <form className="todos__single" >
                { todo.isDone ? (
                        <s className="todos__single--text">{todo.todo}</s>
                    ) : (
                        <span className="todos__single--text">{todo.todo}</span>
                    )}
            <span>
                <div className='icon__box'>
                    <span
                        className="icon">
                    </span>
                    <span className="icon" onClick={() => handleDelete(todo.id)}>
                        <AiFillDelete />
                    </span>
                    <span className="icon" onClick={() => handleDone(todo.id)}>
                        <MdDone />
                    </span>
                </div>
            </span>
        </form>
    );
};

export default Complete;