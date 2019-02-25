export default class Todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = false;
  }
  getTodos() {
    return `
      <li onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">${this.description}</li>
    `
  }

}