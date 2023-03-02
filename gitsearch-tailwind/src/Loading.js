import React from 'react'
import loading from "./assets/loading.gif"
export const Loading = () => {
  return (
    <div className='load-container'>
    <center >
        <img className='loading' src={loading} alt="Loading.." />
    </center>
    </div>
  )
}
