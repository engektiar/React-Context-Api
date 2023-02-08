import { createContext } from "react";
import React, { useState, useEffect } from "react";
export const UserContext = createContext();
export const UseProvider = ({ children }) => {
  const [user, setuser] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setuser(data);
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
