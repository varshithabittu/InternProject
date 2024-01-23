import React from 'react'
import './Dashboard.css';

import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import ProjectRegistrationLists from './ProjectRegistrationLists';
import Login from './Login';
const Dashboard = () => {
    const navigate=useNavigate();
  return (
    <>
        <div className='navbar'>
            <div className='maincontent'>
            <div className='nav-title'>Registration</div>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button type='Primary' onClick={()=>{
                navigate('/login')
            }}>Login</Button>
            <Button type='Primary' onClick={()=>{
               navigate('/project-registration/promoter-detail')
            }}>Project-Registeration</Button>
        </div>
        </div>
    </>
  )
}

export default Dashboard