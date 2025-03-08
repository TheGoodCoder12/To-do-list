import React from 'react'
import ProfileSideBar from "./assets/components/ProfileSideBar"
import ToDoApp from './assets/components/ToDoApp'

const App = () => {
  return (
    <div className='mx-auto h-screen flex'>
      <ProfileSideBar/>
      <ToDoApp/>
    </div>
  )
}

export default App
