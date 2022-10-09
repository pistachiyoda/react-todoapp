import React, { useState } from "react";
import { TodoList } from "./components/TodoList"
import { InputTodo } from "./components/InputTodo"

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todoapp">
      <InputTodo
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
