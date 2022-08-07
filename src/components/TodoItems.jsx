import React, { useState } from "react";

export const TodoItems = (props) => {
    const { todo, index, inCompleteTodos, setIncompleteTodo } = props;
    const [isChecked, setIsChecked] = useState(false);

    const updateCheck = () => {
        setIsChecked(!isChecked);
    }

    const deleteTodo = (index) => {
        const newTodos = inCompleteTodos.filter((_, i) => index !== i);
        setIncompleteTodo(newTodos);
    }

    const text = isChecked ? <s>{todo}</s> : todo;

    return (
    <>
        {
            <li key={index}>
                <input type="checkbox" className="checkbox" onChange={() => updateCheck(index)} checked={isChecked}/>
                {text}
                <button className="delete" onClick={() => deleteTodo(index)}>x</button>
            </li>
        }
    </>
    )
}