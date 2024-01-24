import React from "react";
import { Card, Button, Flex, Form, Input } from "antd";
import logo from "./loginLogo.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons/lib/icons";
import "./Login.css";

const Login = () => {
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
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form>
            </Flex>
      </Card>
    </>
  );
};

export default Login;
