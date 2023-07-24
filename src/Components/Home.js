import React, { useState } from 'react'
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function Home() {

  const [bhangaarData, setBhangaarData] = useState({});

  const getDataHandler = (data) => {
    setBhangaarData(data);
  }

  const handleSearchClick = () => {
    console.log('hello');
  }

  return (
    <div> <div className='d-flex'><div className='w-auto'><Sidebar></Sidebar></div>
    <div className='col'>
    <Navbar onGetSearchResult={getDataHandler} onSearchClick={handleSearchClick}></Navbar>
    <Content data={bhangaarData}></Content>
    </div>
    </div>    
    </div>
  )
}

export default Home