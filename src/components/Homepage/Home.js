import React, { useContext } from "react";
import { UserContext } from "./../contextFile/CreatContex";

export default function Home() {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <div>
      {data.map((e) => {
        return <p>{e.name}</p>;
      })}
    </div>
  );
}
