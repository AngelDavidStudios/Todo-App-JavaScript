/**
 *
 * @param { string } elementId
 * @constructor
 */

export const App = ( elementId ) => {

    // Cuando la funcion (App) se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = '<h1>Hola Mundo</h1>';
        document.querySelector(elementId).append( app )
    })();
}