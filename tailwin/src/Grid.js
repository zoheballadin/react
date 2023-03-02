import React from 'react'

export const Grid = () => {
  return (
    <div className='h-screen text-white bg-slate-700'>
        <div className="container mx-auto">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 auto-cols-max'>
                <div className='p-6 col-start-2 col-span-2 rounded-lg bg-red-500'>1</div>
                <div className='p-6 col-start-1 col-end-3 rounded-lg bg-sky-500'>2</div>
                <div className='p-6 rounded-lg bg-sky-500'>3</div>
                <div className='p-6 rounded-lg bg-sky-500'>4</div>
                <div className='p-6 rounded-lg bg-sky-500'>3</div>
                <div className='p-6 rounded-lg bg-sky-500'>4</div>
                <div className='p-6 rounded-lg bg-sky-500'>3</div>
                <div className='p-6 rounded-lg bg-sky-500'>4</div>
            </div>
        </div>
    </div>
  )
}
