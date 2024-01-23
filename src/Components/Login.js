import React from "react";
import { Card, Button, Flex, Form, Input } from "antd";
import logo from "./loginLogo.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons/lib/icons";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Card hoverable className="cardStyle" bodyStyle={{ padding: 0, overflow: "hidden" }}>
        <Flex justify="space-between">
          <div style={{ width: '50%' }}>
            <img className="logo" src={logo} alt="Login Logo" style={{ width: '100%', height: '100%' }} />
          </div>
          <div style={{ width: '50%' }}>
            <Flex vertical align="center" justify="center" style={{ padding: 32, height: '100%' }}>
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
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form>
            </Flex>
          </div>
        </Flex>
      </Card>
    </>
  );
};

export default Login;
