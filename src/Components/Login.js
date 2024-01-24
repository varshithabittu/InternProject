import React from "react";
import { Card, Button, Flex, Form, Input } from "antd";
import {useNavigate} from 'react-router-dom';
import { UserOutlined, LockOutlined } from "@ant-design/icons/lib/icons";
import "./Login.css";

const Login = () => {
  const navigate=useNavigate();
  return (
    <>
      <Card hoverable className="cardStyle" bodyStyle={{ padding: 0, overflow: "hidden" }}>
            <Flex vertical style={{height:'50%'}}>
              <h2>Login</h2>
              <Form
                onFinish={(values) => {
                  console.log("UserDetails:", values);
                }}
                style={{ width: '80%' }}
              >
                <Form.Item
                  name="username"
                  placeholder="Enter Username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Enter username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Enter password" prefix={<LockOutlined />} />
                </Form.Item>
                <Button type="primary" htmlType="submit" style={{display:'block'}}>
                  Login
                </Button>
                <div>
                  <p style={{fontFamily:'sans-serif'}}>For first time user, Please create profile through Sign Up</p>
                  <Button type="primary" style={{display:'block'}} onClick={()=>{
                    navigate('/signup');
                  }}>Sign Up</Button>
                </div>
              </Form>
            </Flex>
      </Card>
    </>
  );
};

export default Login;
