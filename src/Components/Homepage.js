// src/Home.js
import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const navigate = useNavigate();

  const goToProjectRegistration = () => {
    navigate('/project-registration');
  };

  return (
    <div>
      <Button type="primary" onClick={goToProjectRegistration}>
        Project Registration
      </Button>
    </div>
  );
};

export default Homepage;
