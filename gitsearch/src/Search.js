import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Search = ({ setData }) => {
  let navigate = useNavigate()
  let search = async (name) => {
    try {
      let res = await axios.get(
        `https://api.github.com/search/users?q=${name}`
      );
      res = res.data.items;
      console.log(res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  let [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="Logo"
      />
      <h1>Github Search Engine</h1>
      <input
        value={input}
        type="text"
        placeholder="Search for a user"
        onChange={onChange}
      />
      <br />
      <button onClick={() => search(input)}>Submit</button>
      <button onClick={()=> window.location.reload()}>Clear</button>
    </div>
  );
};
