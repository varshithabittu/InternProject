import React, { useState } from "react";
import { Card, Button, Flex, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons/lib/icons";
import "./Login.css";
import axios from "axios";
import usersData from "../users.json";
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const Login = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      console.log(values.password.type);
      const response = await axios.post("http://localhost:5551/api/login", {
        username: values.username,
        password: values.password,
      });
      if (response.status === 200) {
        message.success("Login Successful!");
        onSuccess();
        navigate("/project-registration/*");
      }
    } catch (errorr) {
      console.log("Error during login", errorr);
      message.error("Error while login, Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card
        hoverable
        className="cardStyle"
        bodyStyle={{ padding: 0, overflow: "hidden" }}
      >
        <Flex vertical style={{ height: "50%" }}>
          <h2>Login</h2>
          <Form
            style={{ width: "80%" }}
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
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
            <Button
              type="primary"
              htmlType="submit"
              style={{ display: "block" }}
              loading={loading}
            >
              Login
            </Button>
            <div>
              <p style={{ fontFamily: "sans-serif", display: "inline-block" }}>
                For the first time user, please create a profile through Sign Up
              </p>
              <Button
                type="primary"
                style={{ display: "block" }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        </Flex>
      </Card>
    </>
  );
};

export default Login;
