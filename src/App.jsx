import React, { useState } from "react";
import { TodoList } from "./components/TodoList"
import { InputTodo } from "./components/InputTodo"

function App() {
  const [inCompleteTodos, setIncompleteTodo] = useState([]);

  return (
    <>
      <InputTodo
        setIncompleteTodo={setIncompleteTodo}
      ></InputTodo>
      <TodoList
        inCompleteTodos={inCompleteTodos}
        setIncompleteTodo={setIncompleteTodo}
      ></TodoList>
    </>
  );
}

export default App;
