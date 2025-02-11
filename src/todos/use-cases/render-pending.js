import todoStore, {Filters} from "../../store/todoStore.js";

let element;

export const renderPending =(elementId) => {
    if (!element) {
        element = document.querySelector(elementId)
    }

    if (!element) {
        throw new Error('Element', elementId, 'not found')
    }
    element.innerHTML = todoStore.getAllTodos( Filters.Pending ).length;
}