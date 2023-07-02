import React, { useState } from "react";
import Todo from "./Todo";

interface TodoType {
  id: number;
  todo: string;
  completed: boolean;
  createdAt: any;
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTodo: TodoType = {
        id: todos.length + 1,
        todo: e.currentTarget.value,
        completed: false,
        createdAt: new Date(),
      };

      setTodos((prev) => {
        return [...prev, newTodo];
      });
      e.currentTarget.value = "";
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <input type="text" onKeyDown={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} ttodo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default App;

const todosim = [
  {
    id: 1,
    todo: "get money",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    todo: "get bitches",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    todo: "get food",
    completed: false,
    createdAt: new Date(),
  },
];
