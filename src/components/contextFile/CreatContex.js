import { createContext } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UseProvider = (props) => {
  const [userdata, setuserdata] = useState();

  const Getitem = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success

        setuserdata(response.data);
      })
      .catch(function (error) {});
  };
  useEffect(() => {
    Getitem();
  });
  console.log(userdata);
  return <UserContext.Provider value={userdata}>{props.children}</UserContext.Provider>;
};
