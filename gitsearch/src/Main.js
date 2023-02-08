import React, { useEffect } from 'react'
import { Search } from './Search'
import { User } from './User'
import { useState } from 'react'
import axios from 'axios'
import { Loading } from './Loading'
export const Main = ({showAlert, alert, data, setData, search, getBooks, loading}) => {

    

    useEffect(()=>{
        getBooks()
    },[])

  return (
    <div>
        
    <Search   alert={alert} search={search}/>
    {loading && <Loading/>}
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
