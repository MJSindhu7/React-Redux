import React, { Component } from "react";
import Todos from "./Todo";

class App extends Component {
  state = {
    todo: [
      { id: 1, content: "milk" },
      { id: 2, content: "eggs" }
    ]
  };
  deleteFunc = id => {
    let todo = this.state.todo.filter(eachTodo => {
      return eachTodo.id !== id;
    });
    this.setState({ todo: todo });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo's</h1>
        <Todos todos={this.state.todo} deleteFunc={this.deleteFunc} />
      </div>
    );
  }
}

export default App;
