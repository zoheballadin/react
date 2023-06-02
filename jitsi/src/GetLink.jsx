import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const GetLink = () => {
const [link, setLink] = useState("")
  const onClick = e =>{
    let num = Math.floor(Math.random()* 999999999999999999)
    setLink(`/meet/${num}`)
  }
  return (
    <div>
        <h1>Generate a link</h1>
        <button onClick={onClick}>Click here</button>
        {link && <Link to={link}>http://localhost:3000{link}</Link>}
    </div>
  )
}
