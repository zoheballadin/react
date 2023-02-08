import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export const UserDashboard = () => {
    let navigate = useNavigate()
   let token = localStorage.getItem("token")
   token = JSON.parse(token);
   if(token.role !== "user"){
    localStorage.removeItem("token")
    navigate("/login")
    
   }

   
   useEffect(()=>{
    const verifyToken = async() =>{
        try {
            let {data} = await axios.get("/api/auth", {
                headers: {
                    "auth-token": token.token
                }
            })
            if(data.role != "user"){
                localStorage.removeItem("token")
                navigate('/login')
                
            }
        } catch (error) {
            console.log(error)
            localStorage.removeItem("token")
            navigate("/login")
        }

    } 
    verifyToken()
   },[])
    return (
    <div>UserDashboard</div>
  )
}
