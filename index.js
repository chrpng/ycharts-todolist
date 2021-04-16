import eventHandlers from './helpers/eventHandlers.js'
import renderTodos from './helpers/render.js'

const { submitTodoForm } = eventHandlers()

const addTodoBtn = document.querySelector('.add-todo-btn')
addTodoBtn.addEventListener('click', submitTodoForm)

// Initial Render

const todosContainer = document.querySelector('.todos')
renderTodos(todosContainer)