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
        <div className='navbar' style={{height:'20%'}}>
            <div className='maincontent'>
            <div className='nav-title'>Registration</div>
        </div>
        <div className='content'>
            <Button type='Primary' onClick={()=>{
                navigate('/login')
            }} style={{backgroundColor:'orange'}}>Login</Button>
            <Button  onClick={()=>{
               navigate('/project-registration/promoter-detail')
            }}style={{backgroundColor:'orange', width:'auto'}}>Project Registeration</Button>
        </div>
        </div>
    </>
  )
}

export default Dashboard