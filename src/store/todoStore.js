import { Todo } from '../todos/models/todoItem.js'

const Filters ={
    All: 'all',
    Completed: 'completed',
    Pending: 'Pending'
}
const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del espacio'),
        new Todo('Piedra de la mente'),
        new Todo('Piedra del poder'),
        new Todo('Piedra de la realidad'),
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state)
    console.log('Init Store 🏬')
}

const loadStore = () => {
    throw new Error('Not implemented')
}

const getAllTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default:
            throw new Error('Invalid filter')
    }
}

/**
 *
 * @param { string } description
 */
const addTodo = (description) => {
    if (!description) {
        throw new Error('Description is required')
    }
    state.todos.push(new Todo (description))
}

/**
 *
 * @param id
 */
const toggleTodo = (id) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === id) {
            todo.done = !todo.done
        }
        return todo;
    })
}

/**
 *
 * @param id
 */
const removeTodo = (id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
}

const removeAllCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)
}

/**
 *
 * @param { Filters } filter
 */
const setFilter = (filter = Filters.All) => {
    state.filter = filter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addTodo,
    getAllTodos,
    toggleTodo,
    removeTodo,
    removeAllCompleted,
    setFilter,
    getCurrentFilter,
}