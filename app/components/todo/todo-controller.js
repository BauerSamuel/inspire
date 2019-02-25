import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let template = '';
	let list = _todoService.TodoList
	list.forEach(t => {
		if (t.completed == true) {
			template += t.getTodos()
		}
		else {
			template += t.getTodos()
		}
	})

	document.querySelector('#todos').innerHTML = template;

	let array = _todoService.TodoList.filter(t => t.completed == false);
	let length = array.length
	if (length > 1) {
		document.querySelector('#todoNumber').innerHTML = `${length} things left, get working!(Single-click to complete, double-click to delete)`;
	}
	else if (length == 1) {
		document.querySelector('#todoNumber').innerHTML = `Only ${length} thing left! Almost done!(Single-click to complete, double-click to delete)`;
	}
	else {
		document.querySelector('#todoNumber').innerHTML = `You did it! All your tasks are done today!(Single-click to complete, double-click to delete)`;
	}
}

// function _drawError() {
// 	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
// }


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		// _todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value,
			completed: false
		}
		debugger
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}
}
