// src/App.js
import React from 'react';
import ProjectRegistrationLists from './Components/ProjectRegistrationLists';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { Routes,Route } from 'react-router-dom';
import Promoterdetail from './Components/Promoterdetail';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Dashboard />}></Route>
    <Route path="/project-registration/*" element={<ProjectRegistrationLists />}></Route>
    <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
