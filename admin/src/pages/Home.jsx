import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'

function Home() {
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[black] to-[#1d3a3a] text-[white] relative'>
      <Nav/>
      <Sidebar/>
    </div>
  ) 
}

export default Home
