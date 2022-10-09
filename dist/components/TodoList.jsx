"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const react_1 = __importDefault(require("react"));
const TodoItem_1 = require("./TodoItem");
const TodoList = (props) => {
    const { todos, setTodos } = props;
    return (<>
            <div id="js-todo-list" className="todo-list">
                <ul>
                    {todos.map((todo, index) => {
            return <TodoItem_1.TodoItem key={index} todo={todo} index={index} todos={todos} setTodos={setTodos}></TodoItem_1.TodoItem>;
        })}
                </ul>
            </div>
            <footer className="footer">
                <span id="js-todo-count">Todoアイテム数: {todos.length}個</span>
            </footer>
        </>);
};
exports.TodoList = TodoList;
