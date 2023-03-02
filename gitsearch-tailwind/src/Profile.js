import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { Repo } from './Repo';
import { useNavigate } from 'react-router-dom';
import { Loading } from './Loading';
export const Profile = ({setLoading, loading}) => {
    let options = {
        auth: {
          username: "zoheballadin",
          password: "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"
        }
      }

    let navigate = useNavigate();
    let {username} = useParams();
    console.log(username)
    let [user, setUser] = useState({})
    let [repos, setRepos] = useState([])
    const getUser = async() =>{
        setLoading(true)
        let {data} = await axios.get(`https://api.github.com/users/${username}`, options)
        setUser(data)
        setLoading(false)
    }

    const getRepos = async() =>{
        try{
            setLoading(true)
            let {data} = await axios.get(`https://api.github.com/users/${username}/repos?sort=desc&per_page=5`, options)
            // console.log(data[0].name)
            // data.splice(5)
        setRepos(data)
        setLoading(false)
        console.log(repos)
        }
        catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getRepos()
    },[])
    useEffect(()=>{
        
        getUser()
        
        
    },[])
    
  return (
    <div className='h-screen bg-sky-300'>
    {loading ? <Loading/> : (
    <div className='profile h-screen flex border-red-600'>
        <div className='info bg-slate-100 h-11/12 mt-6 ml-6 '>
            <h1 className='font-bold text-4xl p-4 text-center'>{user.name}</h1>
            <img src={user.avatar_url} alt="" className='profile-pic p-2 w-2/3 mx-auto'/>
            <h3 className=''>Bio</h3>
            <p id='bio'>{user.bio}</p>
            <p><b>Open for Hiring:</b> {user.hireable ? "Yes" : "No"}</p>
            <p></p>
            <Link to={`https://www.github.com/${username}`} target="_blank"><button>Go to Profile</button></Link>
            <p className='additional'>Followers: {user.followers}</p>
            <p className='additional'>Following: {user.following}</p>
            {user.company && <p className='additional'>Company: {user.company}</p>}
            {user.location && <p className='additional'>Location: {user.location}</p>}
            {user.blog && <p className='additional'>Website: {user.blog}</p>}
        </div>
        <div className='repositories'>
            <button onClick={()=>navigate("/")}>Go Back</button>
            {
                repos.map(item => {
                    return <Repo className="repos" repo={item}/>
                })
            }
            
            
        </div>
    </div>)}
    </div>
  )
}
