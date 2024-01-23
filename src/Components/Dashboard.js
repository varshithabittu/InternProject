import React from 'react'
import './Dashboard.css';
import Login from './Login';
import P
import {Button} from 'antd'
const Dashboard = () => {
  return (
    <>
        <div className='navbar'>
            <div className='maincontent'>
            <div className='nav-title'>Project Registration</div>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button type='Primary' onClick={()=>{
                <Login/>
            }}>Login</Button>
            <Button type='Primary' onClick={()=>{
                <ProjectRegistrationList/>
            }}></Button>
        </div>
        </div>
    </>
  )
}

export default Dashboard