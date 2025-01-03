import React from 'react'

function TaskList() {
  return (
    <div id='taskList' className='w-full flex gap-5 flex-nowrap overflow-x-scroll overflow-y-hidden h-[55%]  mt-7'>
        <div className=' text-white p-5 flex-shrink-0 h-full w-[300px] bg-red-500 rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-700 px-3 py-1 text-sm rounded-md'>High</h3>
                <h4 className='text-sm'>20 feb 2024 </h4>
            </div>
            <h2 className='mt-7 text-2xl tracking-tight font-semibold'>Create a Youtube Video</h2>
            <p className='text-sm mt-4 text-wrap overflow-clip'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut tempore harum officiis vero voluptates. Possimus voluptatum minus quibusdam soluta doloremque perferendis, tempora incidunt
            </p>
        </div>
        <div className=' text-white p-5 flex-shrink-0 h-full w-[300px] bg-green-500 rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-700 px-3 py-1 text-sm rounded-md'>High</h3>
                <h4 className='text-sm'>20 feb 2024 </h4>
            </div>
            <h2 className='mt-7 text-2xl tracking-tight font-semibold'>Create a Youtube Video</h2>
            <p className='text-sm mt-4 text-wrap overflow-clip'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut tempore harum officiis vero voluptates. Possimus voluptatum minus quibusdam soluta doloremque perferendis, tempora incidunt
            </p>
        </div>
        <div className=' text-white p-5 flex-shrink-0 h-full w-[300px] bg-blue-500 rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-700 px-3 py-1 text-sm rounded-md'>High</h3>
                <h4 className='text-sm'>20 feb 2024 </h4>
            </div>
            <h2 className='mt-7 text-2xl tracking-tight font-semibold'>Create a Youtube Video</h2>
            <p className='text-sm mt-4 text-wrap overflow-clip'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut tempore harum officiis vero voluptates. Possimus voluptatum minus quibusdam soluta doloremque perferendis, tempora incidunt
            </p>
        </div>
        <div className=' text-white p-5 flex-shrink-0 h-full w-[300px] bg-yellow-500 rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-700 px-3 py-1 text-sm rounded-md'>High</h3>
                <h4 className='text-sm'>20 feb 2024 </h4>
            </div>
            <h2 className='mt-7 text-2xl tracking-tight font-semibold'>Create a Youtube Video</h2>
            <p className='text-sm mt-4 text-wrap overflow-clip'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut tempore harum officiis vero voluptates. Possimus voluptatum minus quibusdam soluta doloremque perferendis, tempora incidunt
            </p>
        </div>
        
        
    </div>
  )
}

export default TaskList