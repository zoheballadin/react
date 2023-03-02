import React from 'react'

export const Shadow = () => {
  return (
    <div className='h-screen p-4 Parent'>
        <div className="inline-block p-4 text-black bg-white border  rounded-lg shadow-md shadow-cyan-500/50 hover:shadow-xl ">
            <h1 className="text-2xl">Hello</h1>
            <p className='mb-4 hover:blur'>This is my div</p>
            <button className="px-3 py-2 rounded-lg cursor-pointer opacity-50 shadow-md shadow-cyan-500 bg-cyan-500 hover:translate-x-1">Say Hello</button>
        </div>
    </div>
  )
}
