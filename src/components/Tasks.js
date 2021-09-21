import React, { useContext } from "react";
import { TodoListContext } from "../store/TodoListContext";

const Tasks = () => {
 const {todos,removeTodo}= useContext(TodoListContext);
console.log(todos.length)
 

  return (
    <div className="container" style={{ width: "50%" }}>
        <div className='container'>
           Todo List Items : {todos.length}
        </div>
      {todos.map(item=>{
          return(
              <div className='card p-2 mt-2' key={item.id} style={{    background: 'burlywood'}}>
                    <div className="row">
                    <div className="col-md-6">
                        {item.title}
                    </div>
                    <div className="col-md-6">
                        <button className='btn btn-danger' onClick={()=>removeTodo(item.id)}>Delete</button>
                    </div>

                    </div>
              </div>
          )
      })}
    </div>
  );
};

export default Tasks;
