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
    <>
    {loading ? <Loading/> : (
    <div className='profile'>
        <div className='info'>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" className='profile-pic'/>
            <h3>Bio</h3>
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
    </>
  )
}
