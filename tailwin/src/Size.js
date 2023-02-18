import React from 'react'

export const Size = () => {
  return (
    <div className='flex flex-col min-h-screen space-y-4'> 
        <div className="w-1/5 min-w-min bg-red-700">sidebar</div>
        <div className="w-4/5   bg-green-600">main content</div>
    </div>
  )
}
