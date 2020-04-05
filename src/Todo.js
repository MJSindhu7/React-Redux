import React from "react";

const Todos = ({ todos, deleteFunc }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteFunc(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> No Todos left </p>
  );
  return <div className="todo collection">{todoList}</div>;
};

export default Todos;
