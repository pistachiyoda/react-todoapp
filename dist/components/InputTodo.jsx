"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTodo = void 0;
const react_1 = __importStar(require("react"));
const InputTodo = (props) => {
    const { setTodos } = props;
    const [inputText, setInputText] = (0, react_1.useState)("");
    const onChangeTodoText = (event) => {
        setInputText(event.target.value);
    };
    const onSubmitTodoText = (event) => {
        event.preventDefault();
        setTodos(oldtodos => [...oldtodos, inputText]);
        setInputText("");
    };
    return (<form id="js-form" onSubmit={onSubmitTodoText}>
            <input id="js-form-input" className="new-todo" type="text" placeholder="what need todo be done" onChange={onChangeTodoText} value={inputText} autoComplete="off"/>
        </form>);
};
exports.InputTodo = InputTodo;
