import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo" />
        <h1>Github Search Engine</h1>
        <input type="text" placeholder='Search for a user' />
        <br />
        <button>Submit</button>
        <button>Clear</button>
    </div>
  )
}
