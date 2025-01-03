import React from 'react'

function TaskOverviewDashBoard() {
  return (
    <div className='flex text-white mt-10 justify-between gap-5'>
        <div className='bg-red-500 hover:bg-red-600 rounded-md w-[45%] px-9 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='bg-blue-500 hover:bg-blue-600 rounded-md w-[45%] px-9 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='bg-green-500 hover:bg-green-600 rounded-md w-[45%] px-9 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='bg-yellow-500 hover:bg-yellow-600 rounded-md w-[45%] px-9 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskOverviewDashBoard