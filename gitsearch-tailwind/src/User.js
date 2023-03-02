import React from 'react'
import { useNavigate } from 'react-router-dom';


export const User = ({imageUrl, name, profile}) => {

   let navigate = useNavigate();
  return (
    <div className=" odd:bg-sky-400 shadow-md shadow-lime-500/70 hover:shadow-indigo-500/70 rounded-lg even:bg-gray-400 result basis-8/12 md:basis-3/12 border border-green-800 text-center" >
        <img className='w-6/12 my-6 mx-auto' src={imageUrl} alt="" />
        
        <h3 className='font-bold'>{name}</h3>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded' onClick={()=>navigate(`/profile/${name}`)}>Profile</button>
      
      </div>
  )
}
