import React, { useContext } from "react";
import { UsersProvider } from "../context/UsersContext";

export const Users = () => {
  const { user, removeIdUsers } = useContext(UsersProvider);
  return (
    <div>
      {user.map((el) => {
        return (
          <>
            <h1>{el.name}</h1>
            <button onClick={() => removeIdUsers(el.id)}>Remove</button>
          </>
        );
      })}
    </div>
  );
};
