import React from "react";
import { useState } from "react";
import axios from "axios";
export const Register = () => {
  let [user, setUser] = useState({});

  const onChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.id] : e.target.value} )
  };

  const onSubmit = async(e)=>{
    e.preventDefault();
    let {data} = await axios.post("/api/register",user)
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          placeholder="username"
          id="username"
        />
        <input
          type="text"
          onChange={onChange}
          placeholder="password"
          id="password"
        />
        <input
          type="text"
          onChange={onChange}
          placeholder="password confirnm"
          id="password2"
        />
        <input
          type="text"
          onChange={onChange}
          placeholder="fullname"
          id="fullname"
        />
        <input type="text" onChange={onChange} placeholder="email" id="email" />
        <button type="submit">Button</button>
      </form>
    </div>
  );
};
