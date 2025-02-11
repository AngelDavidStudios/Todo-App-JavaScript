import html from './app.html?raw ';
import todoStore from "../store/todoStore.js";
import {renderTodos} from "./use-cases/index.js";

const ElementIds = {
    TodoList: '.todo-list',
    TodoInput: '#new-todo-input',
    deleteButton: '.destroy'
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

    // Referencias Html
    const newDescription = document.querySelector(ElementIds.TodoInput);
    const todoListUL = document.querySelector(ElementIds.TodoList);

    // Eventos
    newDescription.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) {
            return;
        }
        if (newDescription.value.trim() === 0) {
            return;
        }

        todoStore.addTodo( event.target.value)
        displayTodos()
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        if (event.target.matches(ElementIds.deleteButton)) {
            todoStore.removeTodo( element.getAttribute('data-id'))
            displayTodos()
        } else {
            todoStore.toggleTodo( element.getAttribute('data-id'))
            displayTodos()
        }
    });
}