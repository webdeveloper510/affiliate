import React, {useState, useEffect, useContext} from 'react';
import './dashboard.scss';
import SideBar from './SideBar';
function Dashboard() {
  const token = localStorage.getItem("logToken");
  return (
    <div className='dashboard'>
        <SideBar />
    </div>
  )
}

export default Dashboard