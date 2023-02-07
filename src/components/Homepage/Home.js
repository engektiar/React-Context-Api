import React, { useContext } from "react";
import { UserContext } from "./../contextFile/CreatContex";

export default function Home() {
  const [userdata, setuserdata] = useContext(UserContext);
  return (
    <div>
      <h1>Context api from data get </h1>
      {userdata.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
