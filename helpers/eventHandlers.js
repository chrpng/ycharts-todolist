import TodoListModule from './TodoListModule.js'
import renderTodos from './render.js'

const isBlank = (value) => {
	let regex = /^ *$/
	return !value || regex.test(value)
}

const isNotValid = (value) => {
	let regex = /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/
	return regex.test(value)
}

const eventHandlers = () => {
	const todosContainer = document.querySelector('.todos')
	
	const submitTodoForm = (e) => {
		e.preventDefault()

		const newTodoName = document.querySelector('.new-todo-name')
		const newTodoNameValue = newTodoName.value

		if (isBlank(newTodoNameValue)) {
      alert('You need a name for your todo!')
      return
    }
		if (isNotValid(newTodoNameValue)) {
			alert('You cannot use any of the following: #%&$*:<>?/{|}')
			return
		}

		const todoList = TodoListModule.getTodoList()
		todoList.addTodo(newTodoNameValue)
		TodoListModule.saveToStorage()

		newTodoName.value = null
		renderTodos(todosContainer)
	}

	return { submitTodoForm }
}

export default eventHandlers