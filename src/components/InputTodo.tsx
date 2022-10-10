import React, { useState } from "react";

export const InputTodo: React.FC<{
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}> = (props) => {
  const { setTodos } = props;
  const [inputText, setInputText] = useState("");

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onSubmitTodoText = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos((oldtodos: Array<string>) => [...oldtodos, inputText]);
    setInputText("");
  };

  return (
    <form id="js-form" onSubmit={onSubmitTodoText}>
      <input
        id="js-form-input"
        className="new-todo"
        type="text"
        placeholder="what need todo be done"
        onChange={onChangeTodoText}
        value={inputText}
        autoComplete="off"
      />
    </form>
  );
};
