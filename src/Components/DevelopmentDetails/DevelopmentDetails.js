import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Input,
  Space,
  Table,
  Popconfirm,
  Modal,
  InputNumber,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons/lib/icons";
import axios from "axios";
const columns = [
  {
    title: "Type of Inventory",
    dataIndex: "typeofInventory",
    key: "typeofInventory",
  },
  {
    title: "No.of Inventory",
    dataIndex: "no_ofInventory",
    key: "no_ofInventory",
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
  const [editData, setEditdata] = useState(null);
  const [modalVisibility, setModalvisibility] = useState(false);

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5551/api/development-details"
      );
      const data = response.data;
      data.forEach((record, index) => {
        record.index = index + 1;
      });
      setFormData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (key) => {
    try {
      await axios.delete(
        `http://localhost:5551/api/development-details/${key}`
      );
      fetchFormData();
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const handleFormSubmission = async () => {
    try {
      const values = await form.validateFields();
      await axios.post("http://localhost:5551/api/development-details", values);
      fetchFormData();
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = async (key) => {
    const editData = formData.find((record) => record.srno === key);
    setEditdata(editData);
    form.setFieldsValue(editData);
    setModalvisibility(true);
  };

  const handleEditCancel = () => {
    setModalvisibility(false);
  };

  const handleEditSave = async () => {
    try {
      const updatedValues = await form.validateFields();
      await axios.put(
        `http://localhost:5551/api/development-details/${editData.srno}`,
        updatedValues
      );
      fetchFormData();
      setModalvisibility(false);
      form.resetFields();
    } catch (error) {
      console.error("Error saving edited record:", error);
    }
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
              {
                title: "S.NO",
                dataIndex: "",
                key: "",
                render: (record) => {
                  return <span>{record.index}</span>;
                },
              },
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
          width="100%"
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
                name="no_ofInventory"
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
                      return Promise.reject(
                        new Error("Please enter a valid number")
                      );
                    },
                  }),
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 16 }}
              >
                <InputNumber />
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
                      return Promise.reject(
                        new Error("Please enter a valid number")
                      );
                    },
                  }),
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <InputNumber />
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
                      return Promise.reject(
                        new Error("Please enter a valid number")
                      );
                    },
                  }),
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 16 }}
              >
                <InputNumber />
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
                      return Promise.reject(
                        new Error("Please enter a valid number")
                      );
                    },
                  }),
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 16 }}
              >
                <InputNumber />
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
                      return Promise.reject(
                        new Error("Please enter a valid number")
                      );
                    },
                  }),
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 16 }}
              >
                <InputNumber />
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
              name="no_ofInventory"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="4.3 Carpet Area(Sq Meter)"
              name="carpetarea"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <InputNumber />
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
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="4.5 Area of exclusive open terrace if any(Sq Mtr)"
              name="areaofOpenterrace"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="4.6 No.of Inventory Booked"
              name="inventoryBooked"
              rules={[
                {
                  required: true,
                  message: "Please enter number of Inventory",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 16 }}
            >
              <InputNumber />
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
