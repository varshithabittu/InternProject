import React from "react";
import { Card, Flex, Form, Input, Select, Button,message } from "antd";
// import firebase from "./firebase.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const { Option } = Select;
const SignUp = ({onSuccess}) => {
  const navigate=useNavigate();

  const handleSignUp=async (values)=>{
    try {
      console.log(values.username.type);
      const response = await axios.post("http://localhost:5551/api/signup", {
        username: values.username,
        password: values.password,
      });
      if (response.status === 200) {
        message.success("Signup Successful!");
        onSuccess();
        navigate("/project-registration/*");
      }
      else if(response.status===400){
        message.error("Invalid Formate of username or password");
        navigate("/signup");
      }
    } catch (errorr) {
      console.log("Error during signin", errorr);
      message.error("Error while signin, Please try again!");
    } 
  }
  return (
    <>
      <Card
        hoverable
        className="cardStyles"
        bodyStyle={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Flex horizontal justify="center" align="center">
          <Form onFinish={handleSignUp}>
            <Form.Item
              name="username"
              label="UserName"
              labelCol={24}
              wrapperCol={24}
              required
            >
              <Input required/>
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              labelCol={24}
              wrapperCol={24}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item name="type" label="Type" labelCol={24} wrapperCol={24}>
              <Select placeholder="--Select Type--" allowClear>
                <Option value="Agent">Agent</Option>
                <Option value="Architect">Architect</Option>
                <Option value="CA">CA</Option>
                <Option value="Citizen">Citizen</Option>
                <Option value="Contracter">Contracter</Option>
                <Option value="Engineer">Engineer</Option>
                <Option value="Lawyer">Lawyer</Option>
                <Option value="Promoter">Promoter</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ display: "block", alignContent: "center" }}
                onClick={handleSignUp}
              >
                Send OTP
              </Button>
            </Form.Item> */}
            <Form.Item id="sign-in-button"><Button type="primary" htmlType="submit">SignUp</Button></Form.Item>
          </Form>
        </Flex>
      </Card>
    </>
  );
};

export default SignUp;
