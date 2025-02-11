import html from './app.html?raw';
import todoStore, {Filters} from "../store/todoStore.js";
import {renderTodos, renderPending} from "./use-cases/index.js";

const ElementIds = {
    TodoList: '.todo-list',
    TodoInput: '#new-todo-input',
    deleteButton: '.destroy',
    ClearCompleted: '.clear-completed',
    TodoFilter: '.filtro',
    PendingCount: '#pending-count'
}

/**
 *
 * @param { string } elementId
 * @constructor
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getAllTodos( todoStore.getCurrentFilter());
        renderTodos( ElementIds.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending( ElementIds.PendingCount)
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
    const clearCompleted = document.querySelector(ElementIds.ClearCompleted);
    const FiltersLI = document.querySelectorAll(ElementIds.TodoFilter);

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

    clearCompleted.addEventListener('click', () => {
        todoStore.removeAllCompleted()
        displayTodos()
    });

    FiltersLI.forEach( element => {
        element.addEventListener('click', (element) => {
            FiltersLI.forEach( el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch (element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos()
        });
    });
}