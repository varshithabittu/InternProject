// src/App.js
import React from 'react';
import ProjectRegistrationLists from './Components/ProjectRegistrationLists';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { Routes,Route, Link } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Register from './Components/Register';

function App() {
  const [isSignUpSuccessful, setIsSignUpSuccessful] = React.useState(false);
  const [isLoginSuccessful, setLoginSuccessful] = React.useState(false);
  const handleSignUpSuccess = () => {
    setIsSignUpSuccessful(true);
  };
  const handleLoginSuccess = () => {
    setLoginSuccessful(true);
  };
  return (
    <Routes>
    <Route path="/" element={<Dashboard />}></Route>
    <Route path="/login" element={<Login onSuccess={handleLoginSuccess}/>}></Route>
    <Route path="/signup" element={<SignUp onSuccess={handleSignUpSuccess} />}></Route>
    <Route path="/project-registration/*" element={<ProjectRegistrationLists/>}></Route>
    {/* {isLoginSuccessful ? ( <Route path="/project-registration/*" element={<ProjectRegistrationLists />}/>):(
      <Route path="/login" element={<Link to="/login" />}/>
    )} */}
    {isSignUpSuccessful ? (
        <Route path="/register" element={<Register />} />
      ) : (
        <Route path="/register" element={<Link to="/signup" />} />
      )}
    </Routes>
  );
}

export default App;
