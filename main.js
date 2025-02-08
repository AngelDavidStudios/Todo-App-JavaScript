import './style.css'
import { App } from './src/todos/app.js'
import todoStore from './src/store/todoStore.js'

todoStore.initStore();
App('#app');