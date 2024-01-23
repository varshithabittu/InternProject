import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Button,
  Upload,
  Space,
  Popconfirm,
  message,
  Form,
  Input,
  DatePicker,
  Flex,
} from "antd";
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons/lib/icons";
import "./BlockEntry.css";
const columns = [
  {
    title: "Sr No.",
    dataIndex: "srno",
    key: "srno",
  },
  {
    title: "Block Name",
    dataIndex: "blockname",
    key: "blockname",
  },
  {
    title: "Development Start Date",
    dataIndex: "developmentStartDate",
    key: "developmentStartDate",
  },
  {
    title: "Development End Date",
    dataIndex: "developmentendtDate",
    key: "developmentendDate",
  },
  {
    title: "All Commencement Certificates of this block",
    dataIndex: "commencementCertif",
    key: "commencementCertif",
    render: (text, record) => (
      <Upload beforeUpload={() => false} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    ),
  },
  {
    title: "Date of Latest Commencement Certificate",
    dataIndex: "dateLatestCertif",
    key: "dateLatestCertif",
  },
  {
    title: "Commencement certificate No",
    dataIndex: "commencementCertifiNo",
    key: "commencementCertifiNo",
  },
  {
    title: "Height(in Meter) as per Section Plan of this Block",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "FSI(In Sq Meter)",
    dataIndex: "fsi",
    key: "fsi",
  },
  {
    title: "Built-UP(In Sq Meter)",
    dataIndex: "builtUp",
    key: "builtUp",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (text, record) => (
      <Space>
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record.key)}
        >
          Edit
        </Button>
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
];
const data = [
  {
    key: 1,
    srno: 1,
    blockname: "A",
    developmentStartDate: "04-05-2021",
    developmentendtDate: "05-04-2023",
    commencementCertif: "fvg",
    dateLatestCertif: "05-06-2020",
    commencementCertifiNo: "AB/76564556/7646456",
    height: 500,
    fsi: 100,
    builtUp: 300,
  },
];
const handleEdit = (key) => {
  // Implement edit functionality here
  message.success(`Editing record with key: ${key}`);
};

const handleDelete = (key) => {
  // Implement delete functionality here
  message.success(`Deleting record with key: ${key}`);
};
function BlockEntry() {
  const navigate = useNavigate();
  const handlePrevious = () => {
    navigate("/project-registration/upload-documents");
  };
  const handleNext = () => {
    navigate("/project-registration/map");
  };
  return (
    <>
      <section className="section-1" style={{ display: "flex" }}>
        <div className="container">
          <h5>
            AS UNIQUE NAMES OF BLOCK/TYPES/BUNGOLOWS/CATEGORY OF THE PROJECT AS
            PER APPROVED LAYOUT PLAN
          </h5>
          <hr></hr>
          <div>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              size="middle"
              style={{ width: "auto" }}
            />
          </div>
        </div>
      </section>
      <section className="section-2" style={{ display: "flex" }}>
        <div className="container-1">
          <h2>ADD BLOCK DETAILS</h2>
          <div>
            <hr></hr>
          </div>
          <div style={{ width: "100%" }}>
            <Form onFinish={(values)=>{
                console.log("Regiestered fields:",values)
            }}>
              <div style={{ width: "auto" }}>
                <section className="innersection">
                  <Flex justify="space-between" align="flex-start">
                    <Form.Item
                      name="block name"
                      label="7.1 Block Name"
                      required
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      style={{ marginRight: "10px" }}
                    >
                      <Input
                        style={{
                          width: "100%",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="Development Start Date"
                      label="7.2 Development Start Date"
                      required
                      type="date"
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      style={{ marginRight: "10px" }}
                    >
                      <DatePicker
                        style={{
                          width: "100%",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="Development end Date"
                      label="7.3 Development End Date"
                      required
                      type="date"
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                    >
                      <DatePicker
                        style={{
                          width: "100%",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Form.Item>
                  </Flex>
                </section>
                <section className="innersection-1">
                  <Flex justify="space-between" align="center">
                    <Form.Item
                      name="Date of Latest Commencement Certificate"
                      label="7.4 Date of Latest Commencement Certificate"
                      required
                      type="date"
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      style={{ marginRight: "10px" }}
                    >
                      <DatePicker
                        style={{
                          width: "100%",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="commencement certificate no"
                      label="7.5 Commencement Certificate No"
                      required
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      style={{ marginRight: "10px" }}
                    >
                      <Input
                        style={{
                          width: "100%",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="heightofblock"
                      label="7.6 Height(in Meter) as per Section Plan of this Block"
                      required
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                    >
                      <Input
                        style={{
                          width: "100%",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Form.Item>
                  </Flex>
                </section>
                <section className="innersection-3">
                  <Flex
                    justify="flex-start"
                    align="flex-start"
                    style={{ gap: "4px" }}
                  >
                    <Form.Item
                      name="fsi"
                      label="7.7 FSI OF BLOCK(In Sq Meter)"
                      required
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                    >
                      <Input
                        style={{
                          width: "100%",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="builtuparea"
                      label="7.8 Built-up Area of Block(In Sq Meter)"
                      required
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                    >
                      <Input
                        style={{
                          width: "100%",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Form.Item>
                  </Flex>
                </section>
              </div>
              <section>
                <Form.Item
                  name="allCommencementCertif"
                  label="7.9 All Commencement Certificates of this Block"
                  valuePropName="fileList"
                  getValueFromEvent={(e) => e.fileList}
                  rules={[
                    {
                      required: true,
                      message: "Please upload a document!",
                    },
                  ]}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Upload maxCount={1}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </section>
              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Button
                  type="primary"
                  style={{ backgroundColor: "green" }}
                  htmlType="submit"
                >
                  ADD BLOCK
                </Button>
              </Form.Item>
              {/* </section> */}
            </Form>
          </div>

          <div>
            <Flex justify="center" align="flex-end">
              <div>
                <Button
                  style={{ marginRight: "10px", backgroundColor: "green" }}
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
                <Button
                  style={{ backgroundColor: "green" }}
                  onClick={handleNext}
                >
                  Next
                </Button>
                {/* defaultSelectedKeys={[window.location.pathname]} */}
              </div>
            </Flex>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlockEntry;
