import React, { useEffect } from 'react'
import { Search } from './Search'
import { User } from './User'
import { useState } from 'react'
import axios from 'axios'
export const Main = () => {

    let [data, setData] = useState([]);
    

    

    useEffect(()=>{
        const getBooks = async() =>{
            let res = await axios.get(`https://api.github.com/users`)
            setData(res.data)
        }
        getBooks()
    },[])

  return (
    <div>
        
    <Search setData={setData}/>
    <div className="container">
      {
        data.map(item => {
          return <User profile={item.url} name={item.login} imageUrl={item.avatar_url}/>
        })
      }
    </div>
    </div>
  )
}
