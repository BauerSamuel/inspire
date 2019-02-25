import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let template = '';
	let numLeft = 0;
	let list = _todoService.TodoList
	list.forEach(t => {
		console.log("t.completed for this element is " + t.completed)
		if (t.completed == true) {
			template += `<li onclick="app.controllers.todoController.toggleTodoStatus('${t._id}')"><s>${t.description}</s></li>`
			console.log("template is now " + template)
			numLeft--;
		}
		else {
			template += t.getTodos()
			numLeft++;
		}
	})

	console.log(template)
	document.querySelector('#todos').innerHTML = template;

	if (numLeft > 1) {
		document.querySelector('#todoNumber').innerHTML = `${numLeft} things left, get working!`;
	}
	else if (numLeft == 1) {
		document.querySelector('#todoNumber').innerHTML = `Only ${numLeft} thing left! Almost done!`;
	}
	else {
		document.querySelector('#todoNumber').innerHTML = `You did it! All your tasks are done today!`;
	}
}

function _drawError() {
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)
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
		// asks the service to edit the todo status
		// Use put to do this I think


		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}
}
