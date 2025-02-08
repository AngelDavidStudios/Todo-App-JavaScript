import html from './app.html?raw ';
import todoStore from "../store/todoStore.js";
import {renderTodos} from "./use-cases/index.js";

const ElementIds = {
    TodoList: '.todo-list',
}

/**
 *
 * @param { string } elementId
 * @constructor
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getAllTodos( todoStore.getCurrentFilter());
        renderTodos( ElementIds.TodoList, todos)
    }

    // Cuando la funcion (App) se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app )
        displayTodos()
    })();
}