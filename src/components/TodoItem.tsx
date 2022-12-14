import React, { useState } from "react";

export const TodoItem: React.FC<{
  todo: string;
  index: number;
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}> = (props) => {
  const { todo, index, todos, setTodos } = props;
  const [isChecked, setIsChecked] = useState(false);

  const updateCheck = () => {
    setIsChecked(!isChecked);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_: string, i: number) => index !== i);
    setTodos(newTodos);
  };

  const text = isChecked ? <s>{todo}</s> : todo;

  return (
    <li>
      <input
        type="checkbox"
        className="checkbox"
        onChange={() => updateCheck()}
        checked={isChecked}
      />
      {text}
      <button className="delete" onClick={() => deleteTodo(index)}>
        x
      </button>
    </li>
  );
};
