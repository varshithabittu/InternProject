import React from "react";
import { Card, Flex, Form, Input, Select, Button,message } from "antd";
// import firebase from "./firebase.js";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const { Option } = Select;
const SignUp = ({onSuccess}) => {
  const navigate=useNavigate();

  const handleSignUp=()=>{
   try{
    onSuccess();
    message.success('Sign in Successful')
    navigate('/register')
   } 
   catch(error)
   {
    message.error('Error in signing up. Please try again');
    navigate('/signup')
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
          <Form>
            <Form.Item
              name="emailId"
              label="EmailId"
              labelCol={24}
              wrapperCol={24}
              required
            >
              <Input required/>
            </Form.Item>
            <Form.Item
              name="mobile"
              label="Mobile Number"
              labelCol={24}
              wrapperCol={24}
            >
              <Input />
            </Form.Item>
            <Form.Item name="type" label="Type" labelCol={24} wrapperCol={24}>
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
            </Form.Item>
            <Form.Item id="sign-in-button"></Form.Item>
          </Form>
        </Flex>
      </Card>
    </>
  );
};

export default SignUp;