import React from 'react'
import { useNavigate } from 'react-router-dom';


export const User = ({imageUrl, name, profile}) => {

   let navigate = useNavigate();
  return (
    <div className="result">
        <img src={imageUrl} alt="" />
        
        <h3>{name}</h3>
        <button onClick={()=>navigate(`/profile/${name}`)}>Profile</button>
      
      </div>
  )
}
