class Todo {
	constructor(name, id, done = false) {
		this.name = name
		this.id = id ? id : String(Date.now())
		this.done = done
	}

	toggleDone = () => {
		this.done = !this.done
	}
}

const TodoList = (todos = []) => {
	todos = todos.map(todo => {
		return new Todo(todo.name, todo.id, todo.done)
	})

	const getTodos = () => todos

	const addTodo = (...args) => {
		const newTodo = new Todo(args)
		todos = [ ...todos, newTodo ]
	}

	const deleteTodo = (id) => {
		todos = todos.filter(todo => todo.id !== id)
	}

	return {
		getTodos,
		addTodo,
		deleteTodo
	}
}

const TodoListModule = (function() {
  const LOCAL_STORAGE_TODOLIST = 'ycharts.todolist'
	let todolist = []

  const localStorageTest = (function() {
    try {
      localStorage.setItem('testremove', 'testremove')
      localStorage.removeItem('testremove')
      return true
    } catch (e) {
      return false
    }
  })()

  if (localStorageTest) {
    todolist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOLIST)) || [
			{
				name: 'Example Todo with access to local storage, but empty',
				id: '1',
				done: false
			},
			{
				name: 'Done Todo',
				id: '2',
				done: true
			},
			{
				name: 'This todo is so long that it will probably reach the end of its container, and when it reaches that point it will wrap around onto the next line.',
				done: false
			},
		]
  } else {
    console.log('localStorageTest failed')
    todolist = [
			{
				name: 'Example Todo with failed access to local storage',
				id: '1',
				done: true
			},
		]
  }

  todolist = TodoList(todolist)
	console.log(todolist)

  const saveToStorage = () => {
    if (localStorageTest) {
      localStorage.setItem(
        LOCAL_STORAGE_TODOLIST,
        JSON.stringify(todolist.getTodos())
      )
    }
  }

  /**
   * @return {Array<Object>}
   */
	const getTodoList = () => {
    return todolist
  }

  return {
    saveToStorage,
    getTodoList
  }
})()

export default TodoListModule
