import React, { useState,useContext } from "react";
import { TodoListContext } from "../store/TodoListContext";

const Form = () => {
   const [title,setTitle]= useState('');
 
   const {todos,addTodo}= useContext(TodoListContext);

 
   const submitHandler=(e)=>{
    e.preventDefault();
   addTodo(title);
    setTitle('')
   }
  return (
    <div className="container">
      <div className="container" style={{ width: "50%" }}>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="task">Add Task:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Task"
              id="task"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
            />
          </div>
          <div className="container mt-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
