import { createContext, useEffect, useReducer, useState } from "react";

export const UsersProvider = createContext();
const initialState = {
  idUser, 
  idTodo,
};
const removeReducer = (state,action)={
 
}
export const UsersContextProvider = ({ children }) => {
  const [id, dispatch] = useReducer();

  const [user, setUser] = useState([]);
  const [todos, setTodos] = useState([]);

  const removeIdUsers=(id)=>dispatch({type:"removeUsers" ,payload:id})
  const removeIdTodo=(id)=>dispatch({type:"removeTodo" ,payload:id})

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const data = {
    user: user,
    todos: todos,
    removeIdUsers,
    removeIdTodo,

  };

  return (
    <UsersProvider.Provider value={data}>{children}</UsersProvider.Provider>
  );
};
