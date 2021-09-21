import React from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import TodoListContextProvider from "./store/TodoListContext";

import "./App.css";

const App = () => {
  return (
    <TodoListContextProvider>
      <div className="App">
        <Form />
        <hr />
        <Tasks />
      </div>
    </TodoListContextProvider>
  );
};

export default App;
