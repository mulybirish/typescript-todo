import React, { useState } from "react";
import "./App.css";

type TodoType = {
  id: number;
  todo: string;
  completed: boolean;
};
type TodoProps = {
  ttodo: TodoType;
  toggleTodo: (id: number) => void;
};
const Todo: React.FC<TodoProps> = ({ ttodo, toggleTodo }) => {
  const handleComplete = () => {
    toggleTodo(ttodo.id);

    console.log(ttodo);
  };
  return (
    <div>
      <div className="todo-body">
        <input
          checked={ttodo.completed}
          onChange={handleComplete}
          type="checkbox"
        />{" "}
        {ttodo.completed ? (
          <h3 style={{ textDecoration: "line-through" }}>{ttodo.todo}</h3>
        ) : (
          <h3>{ttodo.todo}</h3>
        )}
        {/* <h3>{ttodo.todo}</h3> */}
      </div>
    </div>
  );
};

export default Todo;
