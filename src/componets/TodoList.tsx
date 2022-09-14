import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css'
import { Droppable } from 'react-beautiful-dnd'

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
            <Droppable droppableId="TodoList">
                {
                    (provided)=>(
                        <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos__heading">
                                Active Tasks
                            </span>
                            {
                                todos?.map((todo , index) => 
                                    <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos}></SingleTodo>
                                )
                            }
                            {/* 빈자리 만들어 뜨는 현상 방지 */}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId="TodoRemove">
                {(provided) => (
                    <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos__heading">
                            completed Tasks
                        </span>
                        {
                            completed?.map((todo , index) => 
                                <SingleTodo index={index} todo={todo} key={todo.id} todos={completed} setTodos={setCompleted}></SingleTodo>
                            )
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;


{/* <div className='todos'>
{
    todos?.map(todo => 
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}></SingleTodo>
    )
}
</div> */}