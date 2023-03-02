import React from 'react'

export const GridRow = () => {
  return (
    <div className='h-screen text-white bg-slate-700'>
        <div className="container mx-auto">
            <div className='grid grid-rows-6 grid-flow-col gap-4'>
                <div className='p-6 rounded-lg bg-red-500'>1</div>
                <div className='p-6 rounded-lg bg-sky-500'>2</div>
                <div className='p-6 rounded-lg bg-sky-500'>3</div>
                <div className='p-6 rounded-lg bg-sky-500'>4</div>
                <div className='p-6 rounded-lg bg-sky-500'>5</div>
                <div className='p-6 rounded-lg bg-sky-500'>6</div>
                <div className='p-6 row-span-3 rounded-lg bg-sky-500'>7</div>
                <div className='p-6 rounded-lg bg-sky-500'>8</div>
                <div className='p-6 rounded-lg bg-red-500'>1</div>
                <div className='p-6 rounded-lg bg-sky-500'>2</div>
                <div className='p-6 rounded-lg bg-sky-500'>3</div>
                <div className='p-6 rounded-lg bg-sky-500'>4</div>
                <div className='p-6 rounded-lg bg-sky-500'>5</div>
                <div className='p-6 rounded-lg bg-sky-500'>6</div>
                <div className='p-6 rounded-lg bg-sky-500'>7</div>
                <div className='p-6 rounded-lg bg-sky-500'>8</div>
            </div>
        </div>
    </div>
  )
}
