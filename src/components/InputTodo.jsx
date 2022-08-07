import React, { useState } from "react";

export const InputTodo = (props) => {
    const { setIncompleteTodo }  = props;
    const [inputText, setInputText] = useState("");

    const onChangeTodoText = (event) => {
        setInputText(event.target.value);
    }

    const onSubmitTodoText = (event) => {
        event.preventDefault();
        setIncompleteTodo(oldInCompleteTodos => [...oldInCompleteTodos, inputText]);
        setInputText("");
    }

    return (
        <form
            id="js-form"
            onSubmit={onSubmitTodoText}    
        >
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
    )
}