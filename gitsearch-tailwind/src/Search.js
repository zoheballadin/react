import React, { useState } from "react";

import { Alert } from "./Alert";
export const Search = ({  alert, search}) => {
  

  let [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="bg-gray-700 text-center  text-white py-6" >
      <img className="w-1/12 rounded-lg mx-auto  relative top-6"
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="Logo"
      />
      <h1 className="mx-auto mt-16 mb-7 font-bold text-5xl ">Github Search Engine</h1>
      <input
      className="p-3 w-3/12 rounded-lg"
        value={input}
        type="text"
        placeholder="Search for a user"
        onChange={onChange}
      />
      <Alert alert={alert}/>
      <br />
      <button className="bg-blue-500 mr-7 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" onClick={() => search(input)}>Submit</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" onClick={()=> window.location.reload()}>Clear</button>
    </div>
  );
};
