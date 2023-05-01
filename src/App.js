import "./App.css";
import { Users } from "./Components/Users";
import { UsersContextProvider } from "./context/UsersContext.jsx";
import { Todo } from "./Components/Todo";

function App() {
  return (
    <UsersContextProvider>
      <Users />
      <Todo />
    </UsersContextProvider>
  );
}

export default App;
