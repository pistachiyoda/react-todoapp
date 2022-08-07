import React from "react";
import { TodoItems } from "./TodoItems"

export const TodoList = (props) => {
    const { inCompleteTodos, setIncompleteTodo } = props;

    return (
        <>
            <div id="js-todo-list" className="todo-list">
                <ul>
                    {inCompleteTodos.map((todo, index) => {
                            return <TodoItems
                                key={index}
                                todo={todo}
                                index={index}
                                inCompleteTodos={inCompleteTodos}
                                setIncompleteTodo={setIncompleteTodo}
                            ></TodoItems>
                    })
                    }
                </ul>
            </div>
            <footer className="footer">
                <span id="js-todo-count">Todoアイテム数: {inCompleteTodos.length}個</span>
            </footer>
        </>
    )
}
