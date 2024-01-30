import React, { useState } from "react";
import {
  Form,
  Button,
  Input,
  Space,
  Table,
  Flex,
  Popconfirm,
  Modal,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons/lib/icons";
const columns = [
  {
    title: "Sr No.",
    dataIndex: "srno",
    key: "srno",
  },
  {
    title: "Type of Inventory",
    dataIndex: "typeofInventory",
    key: "typeofInventory",
  },
  {
    title: "No.of Inventory",
    dataIndex: "no.ofInventory",
    key: "no.ofInventory",
  },
  {
    title: "Carpet Area(Sq Meter)",
    dataIndex: "carpetarea",
    key: "carpetarea",
    width: "10%",
  },
  {
    title: "Area of exclusive balcony/Veranda",
    dataIndex: "areaofbalcony",
    key: "areaofbalcony",
    width: "10%",
  },
  {
    title: "Area of exclusive open terrace if any(Sq Mtr)",
    dataIndex: "areaofOpenterrace",
    key: "areaofOpenterrace",
    width: "10%",
  },
  {
    title: "No.of Inventory Booked",
    dataIndex: "inventoryBooked",
    key: "inventoryBooked",
    width: "10%",
  },
];
const DevelopmentDetails = () => {
  const [formData, setFormData] = useState([]);
  const [form] = Form.useForm();
  const handleDelete = (key) => {
    const updatedForm = formData.filter((record) => record.srno !== key);
    setFormData(updatedForm);
  };
  const handleFormSubmission = () => {
    form.validateFields().then((values) => {
      const newFormData = [
        ...formData,
        {
          srno: formData.length + 1,
          typeofInventory: values.typeofInventory,
          "no.ofInventory": values["no.ofInventory"],
          carpetarea: values.carpetarea,
          areaofbalcony: values.areaofbalcony,
          areaofOpenterrace: values.areaofOpenterrace,
          inventoryBooked: values.inventoryBooked,
        },
      ];
      setFormData(newFormData);
      form.resetFields();
    });
  };
  const [editData, setEditdata] = useState(null);
  const [modalVisibility, setModalvisibility] = useState(false);
  const handleEdit = (key) => {
    const editData = formData.find((record) => record.srno === key);
    console.log(editData);
    setEditdata(editData);
    form.setFieldsValue(editData);
    setModalvisibility(true);
  };
  const handleEditCancel=()=>{
    setModalvisibility(false);
  }
  const handleEditSave = () => {
    const updatedValues = form.getFieldsValue();
    const updatedFormData = formData.map((record) =>
      record.srno === editData.srno
        ? {
            ...record,
            typeofInventory: updatedValues.typeofInventory,
            "no.ofInventory": updatedValues["no.ofInventory"],
            carpetarea: updatedValues.carpetarea,
            areaofbalcony: updatedValues.areaofbalcony,
            areaofOpenterrace: updatedValues.areaofOpenterrace,
            inventoryBooked: updatedValues.inventoryBooked,
          }
        : record
    );
    setFormData(updatedFormData);
    form.resetFields();
    setModalvisibility(false);
    form.resetFields();
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <h2>Inventory Details</h2>
        <span>
        <p>
          See section 4,11,General Rule 3,4,AUTHORITY RULE 10,REGULATION AND
          ORDERS
        </p>
        </span>
        {formData && formData.length > 0 ? (
          <Table
            dataSource={formData.map((record, index) => ({
              ...record,
              key: record.srno,
            }))}
            columns={[
              ...columns,
              {
                title: "Action",
                dataIndex: "",
                key: "action",
                render: (text, record) => (
                  <Space>
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      onClick={() => handleEdit(record.key)}
                    >
                      Edit
                    </Button>
                    <br />
                    <Popconfirm
                      title="Are you sure to delete this record?"
                      onConfirm={() => handleDelete(record.key)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button type="primary" danger icon={<DeleteOutlined />}>
                        Delete
                      </Button>
                    </Popconfirm>
                  </Space>
                ),
              },
            ]}
            pagination={false}
            rowKey={(record) => record.key}
          />
        ) : (
          <p>No data available</p>
        )}
        <Modal
          title="Edit Record"
          visible={modalVisibility}
          onCancel={handleEditCancel}
          onOk={handleEditSave}
          width='100%'
        >
          <Form form={form} initialValues={editData}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-equally",
            }}
          >
            <Form.Item
              label="4.1 Type of Inventory"
              name="typeofInventory"
              rules={[
                {
                  required: true,
                  message: "Please enter Type of Inventory",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="4.2 No.of Inventory"
              name="no.ofInventory"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}              
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
             <Input type="number"/>
            </Form.Item>
            <Form.Item
              label="4.3 Carpet Area(Sq Meter)"
              name="carpetarea"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}         
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
             <Input type="number"/>
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-equally",
            }}
          >
            <Form.Item
              label="4.4 Area of exclusive balcony/Veranda"
              name="areaofbalcony"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}         
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <Input type="number"/>
            </Form.Item>
            <Form.Item
              label="4.5 Area of exclusive open terrace if any(Sq Mtr)"
              name="areaofOpenterrace"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}         
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <Input type="number"/>
            </Form.Item>
            <Form.Item
              label="4.6 No.of Inventory Booked"
              name="inventoryBooked"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}         
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <Input type="number"/>
            </Form.Item>
          </div>
          </Form>
        </Modal>
        <Form form={form}>
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-equally",
            }}
          >
            <Form.Item
              label="4.1 Type of Inventory"
              name="typeofInventory"
              rules={[
                {
                  required: true,
                  message: "Please enter Type of Inventory",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="4.2 No.of Inventory"
              name="no.ofInventory"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}              
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
             <Input type="number"/>
            </Form.Item>
            <Form.Item
              label="4.3 Carpet Area(Sq Meter)"
              name="carpetarea"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}         
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
             <Input type="number"/>
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-equally",
            }}
          >
            <Form.Item
              label="4.4 Area of exclusive balcony/Veranda"
              name="areaofbalcony"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}         
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <Input type="number"/>
            </Form.Item>
            <Form.Item
              label="4.5 Area of exclusive open terrace if any(Sq Mtr)"
              name="areaofOpenterrace"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}         
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <Input type="number"/>
            </Form.Item>
            <Form.Item
              label="4.6 No.of Inventory Booked"
              name="inventoryBooked"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /^[0-9]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please enter a valid number"));
                  },
                }),
              ]}         
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <Input type="number"/>
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              style={{
                backgroundColor: "green",
                color: "white",
                margin: "10px",
              }}
              onClick={handleFormSubmission}
              htmlType="submit"
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default DevelopmentDetails;
