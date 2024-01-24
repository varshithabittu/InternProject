// src/App.js
import React from 'react';
import ProjectRegistrationLists from './Components/ProjectRegistrationLists';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Register from './Components/Register';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Dashboard />}></Route>
    <Route path="/project-registration/*" element={<ProjectRegistrationLists />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/register" element={<Register/>}></Route>
    </Routes>
  );
}

export default App;
