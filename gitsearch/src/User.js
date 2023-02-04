import React from 'react'
import { Link, useHref } from 'react-router-dom'
export const User = ({imageUrl, name, profile}) => {

   
  return (
    <div className="result">
        <img src={imageUrl} alt="" />
        
        <h3>{name}</h3>
        <button>Profile</button>
      
      </div>
  )
}
