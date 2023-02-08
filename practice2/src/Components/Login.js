import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    let navigate = useNavigate()
    let [loginInfo, setLoginInfo] = useState({})

    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(token){
            token = JSON.parse(token);
            if(token.role == "admin"){
                navigate("/admin")
            }
            else if(token.role == "user"){
                navigate("/user")
            }
            else{
                localStorage.removeItem("token")
            }
        }
    },[])

    const onChange = (e) =>{
        setLoginInfo({
            ...loginInfo,
            [e.target.id]: e.target.value
        })
    }

    const onClick =async() =>{
        try{
            let {data} = await axios.post("/api/login", loginInfo)
        console.log(data)
        localStorage.setItem("token", JSON.stringify({
            token: data.token, 
            role: data.role
        }))

        if(data.role == "admin"){
            navigate("/admin")
        }
        else if(data.role == "user"){
            navigate("/user")
        }
        else{
            localStorage.removeItem("token")
        }
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
        <input type="text" placeholder='email' id='email' onChange={onChange}/>
        <input type="text" placeholder='password' id='password' onChange={onChange}/>
        <button onClick={onClick}>Click</button>
    </div>
  )
}
