export default class Todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = data.completed;
  }
  getTodos() {
    if (this.completed == false) {
      return `
      <li on ondblclick="app.controllers.todoController.removeTodo('${this._id}')" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">${this.description}</li>
      `
    } else {
      return `
      <li class="text-muted" ondblclick="app.controllers.todoController.removeTodo('${this._id}')" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"><del>${this.description}</del>(completed)</li>
      `
    }
  }

}