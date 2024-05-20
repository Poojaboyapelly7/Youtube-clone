import React from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = (sidebar) => {
  return (
   <div className='wrapper'>
   <Sidebar sidebar={sidebar}/>
   <div className={`container${sidebar.sidebar?"":'-large-container'}`}>
    <Feed/>
   </div>
   </div>
  )
}

export default Home
