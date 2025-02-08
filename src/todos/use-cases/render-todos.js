import {Todo} from "../models/todoItem.js";
import {createTodoHtml} from "./create-todo-html.js";

/**
 *
 * @param {string} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
    const element = document.querySelector((elementId));

    todos.forEach(todo => {
        element.append( createTodoHtml(todo))
    });
}