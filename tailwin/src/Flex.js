import React from 'react'

export const Flex = () => {
  return (
    <div className='Parent'>
        <div>Header</div>
       
        
        <div className='flex '>
            <div className='basis-4/12'>Another sidebar</div>
            <div className='basis-6/12'>Main content</div>
            <div className='basis-2/12'>Sidebar</div>
        </div>
        
    </div>
  )
}
