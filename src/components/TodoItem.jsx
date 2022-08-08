import React, { useState } from "react";

export const TodoItem = (props) => {
    const { todo, index, todos, setTodos } = props;
    const [isChecked, setIsChecked] = useState(false);

    const updateCheck = () => {
        setIsChecked(!isChecked);
    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => index !== i);
        setTodos(newTodos);
    }

    const text = isChecked ? <s>{todo}</s> : todo;

    return (
            <li>
                <input type="checkbox" className="checkbox" onChange={() => updateCheck(index)} checked={isChecked}/>
                {text}
                <button className="delete" onClick={() => deleteTodo(index)}>x</button>
            </li>
    )
}