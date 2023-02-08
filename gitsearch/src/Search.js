import React, { useState } from "react";

import { Alert } from "./Alert";
export const Search = ({  alert, search}) => {
  

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
      <Alert alert={alert}/>
      <br />
      <button onClick={() => search(input)}>Submit</button>
      <button onClick={()=> window.location.reload()}>Clear</button>
    </div>
  );
};
