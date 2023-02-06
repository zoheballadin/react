import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { Repo } from './Repo';
import { useNavigate } from 'react-router-dom';
export const Profile = () => {

    let navigate = useNavigate();
    let {username} = useParams();
    console.log(username)
    let [user, setUser] = useState({})
    let [repos, setRepos] = useState([])
    const getUser = async() =>{
        let {data} = await axios.get(`https://api.github.com/users/${username}`)
        setUser(data)
    }

    const getRepos = async() =>{
        try{
            let {data} = await axios.get(`https://api.github.com/users/${username}/repos`)
            // console.log(data[0].name)
            data.splice(5)
        setRepos(data)
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
            <p className='additional'>Company: {user.company}</p>
            <p className='additional'>Location: {user.location}</p>
            <p className='additional'>Website: {user.blog}</p>
        </div>
        <div className='repositories'>
            <button onClick={()=>navigate("/")}>Go Back</button>
            {
                repos.map(item => {
                    return <Repo className="repos" repo={item}/>
                })
            }
            
            {/* <div className="repos"><h3 className='test'>{}</h3></div>
            <div className="repos"><h3 className='test'>Repo 1</h3></div>
            <div className="repos"><h3 className='test'>Repo 1</h3></div>
            <div className="repos"><h3 className='test'>Repo 1</h3></div>
            <div className="repos"><h3 className='test'>Repo 1</h3></div> */}
        </div>
    </div>
    </>
  )
}
