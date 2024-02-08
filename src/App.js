// src/App.js
import React from "react";
import ProjectRegistrationLists from "./Components/ProjectRegistrationLists";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./Components/Signup/SignUp";
import Register from "./Components/Register/Register";
import RegistrationForm from "./Components/ProjectRegistrationForm/RegistrationForm";

function App() {
  const [isSignUpSuccessful, setIsSignUpSuccessful] = React.useState(false);
  const [isLoginSuccessful, setLoginSuccessful] = React.useState(false);
  const [isRegisterSuccess, setRegisterSuccess] = React.useState(false);
  const [isRegisterformSuccess, setRegisterformSuccess] = React.useState(false);
  const handleSignUpSuccess = () => {
    setIsSignUpSuccessful(true);
  };
  const handleLoginSuccess = () => {
    setLoginSuccessful(true);
  };
  const handleRegisterSuccess = () => {
    setRegisterSuccess(true);
  };
  const handleFormRegister = () => {
    setLoginSuccessful(true);
    setRegisterformSuccess(true);
  };
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route
        path="/login"
        element={<Login onSuccess={handleLoginSuccess} />}
      ></Route>
      <Route
        path="/signup"
        element={<SignUp onSuccess={handleSignUpSuccess} />}
      ></Route>
      {/* {isLoginSuccessful ? ( <Route path="/project-registration/*" element={<ProjectRegistrationLists />}/>):(
      <Route path="/login" element={<Link to="/login" />}/>
    )} */}
      <Route
        path="/project-registration/*"
        element={<ProjectRegistrationLists />}
      />
      {isSignUpSuccessful ? (
        <Route
          path="/register"
          element={<Register onSuccess={handleRegisterSuccess} />}
        />
      ) : (
        <Route path="/signup" element={<Link to="/signup" />} />
      )}
      {isRegisterSuccess ? (
        <Route
          path="/registration-form"
          element={<RegistrationForm onSuccess={handleFormRegister} />}
        />
      ) : (
        <Route path="/signup" element={<SignUp />} />
      )}
    </Routes>
  );
}

export default App;
