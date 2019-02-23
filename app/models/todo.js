export default class Todo {
  constructor(data) {
    console.log(data)
  }
  getTodos() {
    return `
      <li>{this.todo}</li>
    `
  }

}