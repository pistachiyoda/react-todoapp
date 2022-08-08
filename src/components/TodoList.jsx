import React from "react";
import { TodoItem } from "./TodoItem"

export const TodoList = (props) => {
    const { todos, setTodos } = props;

    return (
        <>
            <div id="js-todo-list" className="todo-list">
                <ul>
                    {todos.map((todo, index) => {
                            return <TodoItem
                                key={index}
                                todo={todo}
                                index={index}
                                todos={todos}
                                setTodos={setTodos}
                            ></TodoItem>
                    })
                    }
                </ul>
            </div>
            <footer className="footer">
                <span id="js-todo-count">Todoアイテム数: {todos.length}個</span>
            </footer>
        </>
    )
}
