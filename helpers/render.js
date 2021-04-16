import TodoListModule from './TodoListModule.js'

const render = (() => {
	const renderTodos = (container) => {
		while(container.lastChild) {
			container.removeChild(container.lastChild)
		}

		const todos = TodoListModule.getTodoList().todos

		const todosFragment = document.createDocumentFragment()
		todos.forEach(todo => {
			const todoLi = document.createElement('li')
			todoLi.classList.add('todo-item')

			const check = document.createElement('span')
			check.classList.add('todo-check-circle')
			if (todo.done) {
				todoLi.classList.add('done')
			}
			check.addEventListener('click', () => {
				todo.toggleDone()
				todoLi.classList.toggle('done')
				TodoListModule.saveToStorage()
			})

			const todoName = document.createElement('span')
			todoName.classList.add('todo-name')
			todoName.innerText = todo.name

			const deleteButton = document.createElement('button')
			deleteButton.classList.add('todo-delete-btn')
			deleteButton.innerText = 'x'
			deleteButton.addEventListener('click', () => {
        const newTodos = TodoListModule.getTodoList()
				newTodos.deleteTodo(todo.id)
				TodoListModule.saveToStorage()
				renderTodos(container)
      })

			todoLi.append(check, todoName, deleteButton)
			todosFragment.append(todoLi)
		})

		container.append(todosFragment)
	}

	return {
		renderTodos
	}
})()

export default render