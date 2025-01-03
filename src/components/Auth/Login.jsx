import React, { useState } from 'react'

function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("second")

  const submitHandler = (e) => {
      e.preventDefault()
      console.log("Email : " , email)
      console.log("Password : " , password)
      setemail("")
      setpassword("")
  }

  return (
    <div className='bg-zinc-900 w-full  text-white min-h-screen flex justify-center items-center'>
      <div className='w-md bg-zinc-800 rounded-xl p-7 m-2 flex justify-center flex-col items-center gap-5 '>
        <h2 className='text-3xl'>Login</h2>
        <form onSubmit={(e) => submitHandler(e)} className='flex gap-3 p-2  justify-center flex-col items-center text-gray-700'>
          <input 
          type="email" 
          value={email}
          required 
          onChange={(e) => setemail(e.target.value)}
          placeholder='Enter Your Email' 
          className='rounded-xl w-full px-3    ' />
          <input 
          type="password" 
          required 
          value={password}
          placeholder='Enter Your Password' 
          onChange={(e) => setpassword(e.target.value)}
          className='rounded-xl w-full px-3' />

          <button className='bg-blue-600 hover:bg-blue-700 w-full rounded-xl py-2'>Submit</button>
        </form>
      </div>  
    </div>
  )
}

export default Login