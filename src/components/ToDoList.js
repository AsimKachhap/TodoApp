import React from 'react';

import ToDo from './ToDo';

const ToDoList = ({todos, setTodos, filteredTodos})=>{
  console.log(filteredTodos);
    return(
        <div className="todo-container">
      <ul className="todo-list">
      { 
        filteredTodos.map((todo)=>(
          <ToDo 
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          key={todo.id} 
          text={todo.text}
          />
        ))
      }
      </ul>
    </div>
    );
};

export default ToDoList;