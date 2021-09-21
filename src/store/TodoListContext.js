import React,{createContext, useState} from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider=(props)=>{
    const [todos,setTodos]=useState([
        {id:'p1',title:'First Book'},
        {id:'p2',title:'Second Book'}
    ])
    const addTodo=(name)=>{
        setTodos(
            [...todos,{id:Math.random().toString(),title:name}]
        )
    }
    const removeTodo=(id)=>{
        console.log(id)
      const newTodos= todos.filter(todo=> todo.id!==id);
      setTodos(newTodos)
    }
    return(
        <TodoListContext.Provider value={{todos,addTodo,removeTodo}}>
            {props.children}
        </TodoListContext.Provider>
    )
}
export default TodoListContextProvider;