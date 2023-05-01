import React, { useContext } from "react";
import { UsersProvider } from "../context/UsersContext";

export const Todo = () => {
  const { todos, removeIdTodo } = useContext(UsersProvider);
  return (
    <div>
      {todos.map((el) => {
        return (
          <div>
            <h1>{el.title}</h1>
            <button onClick={() => removeIdTodo(el.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
