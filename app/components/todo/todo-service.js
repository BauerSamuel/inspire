import Todo from "../../models/todo.js";

// @ts-ignore
let _todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/samuel/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoList() {
		return _state.todos
	}

	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		_todoApi.get()
			.then(res => {
				let data = res.data.data.map(t => new Todo(t))
				_setState('todos', data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		_todoApi.post('', todo)
			.then(res => {
				this.getTodos();
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		todo.completed = !todo.completed
		_todoApi.put(`/${todoId}`, todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		let todo = _state.todos.find(t => t._id == todoId)
		console.log(todo)
		_todoApi.delete(`/${todoId}`, todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => {
				console.error(err)
			})
	}

}
