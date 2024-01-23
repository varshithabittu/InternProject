// RegistrationForm.js

import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { generateRegistrationNumber } from './Utility'; 

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [registrationNumber, setRegistrationNumber] = useState('');

  const onFinish = (values) => {
    const newRegistrationNumber = generateRegistrationNumber();
    setRegistrationNumber(newRegistrationNumber);
    console.log(values,newRegistrationNumber)
    message.success(`Registration successful! Your Registration Number is: ${newRegistrationNumber}`);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      {registrationNumber && (
        <Form.Item label="Registration Number">
          <Input value={registrationNumber} readOnly />
        </Form.Item>
      )}
    </Form>
  );
};

export default RegistrationForm;
