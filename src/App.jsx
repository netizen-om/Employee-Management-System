import React, { useState } from 'react'
import Login from './components/Auth/Login'
import Header from './Header/Header'
import TaskOverviewDashBoard from './components/others/TaskOverviewDashBoard'
import TaskList from './components/TaskList/TaskList'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'

function App() {
  return (
    <div className='p-10 bg-zinc-900 w-full h-screen'>
      {/* <Login /> */}
      {/* <Header /> */}
      {/* <TaskOverviewDashBoard /> */}
      {/* <TaskList /> */}
      <AdminDashBoard />
    </div>
  )
}

export default App