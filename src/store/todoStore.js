import { Todo } from '../store/models/todoItem.js'

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
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state)
    console.log('Init Store 🏬')
}

export default {
    initStore,
}