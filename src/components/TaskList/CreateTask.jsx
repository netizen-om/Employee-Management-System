import React from 'react'

function CreateTask() {
  return (
    <div className='mt-10 bg-zinc-800 p-5 text-white'>
            <form className='flex w-full '>
                <div className='flex w-2/3 flex-col gap-5'>
                    <div className='flex flex-col w-1/2'>
                        <label   className='text-gray-300'>Task Title</label>
                        <input type="text" placeholder='Make a UI design' className='bg-transparent outline-none border-[1px] border-gray-400 rounded-md text-white px-1' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label  className='text-gray-300'>Date</label>
                        <input type="date" className='bg-transparent border-[1px]  border-gray-400 rounded-md outline-none px-1 text-white' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label  className='text-gray-300'>Assign To</label>
                        <input type="text" placeholder='Employee name' className='bg-transparent border-[1px]  border-gray-400 rounded-md outline-none text-white px-1' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label  className='text-gray-300'>Categary</label>
                        <input type="text" placeholder='dev,design,etc' className='bg-transparent border-[1px]  border-gray-400 rounded-md outline-none text-white px-1' />
                    </div>
                </div>

                <div className='w-2/3 flex flex-col'>
                    <label htmlFor="" className='text-gray-300'>Description</label>
                    <textarea name="" id="" className='h-full bg-transparent border-[1px]  outline-none resize-none border-gray-400'></textarea>
                    <button className='mt-3 bg-emerald-600 hover:bg-emerald-700 rounded-md py-2'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask