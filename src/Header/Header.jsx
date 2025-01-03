import React from 'react'

function Header() {
  return (
    <div className='w-full text-white bg-zinc-900 flex items-center justify-between '>
        <div> <h1>Hello ,<br /> <span className='text-2xl font-semibold'> Om 👋 </span></h1></div>
        <button className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-medium text-lg'>Log Out</button>
    </div>
  )
}

export default Header