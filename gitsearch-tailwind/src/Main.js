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
    <div className='bg-sky-200'>
        
    <Search   alert={alert} search={search}/>
    {loading && <Loading/>}
    <div className="container flex flex-wrap justify-center gap-8 mx-auto  mt-8 ">
      {
        data.map(item => {
          return <User profile={item.url} name={item.login} imageUrl={item.avatar_url}/>
        })
      }
    </div>
    </div>
  )
}
