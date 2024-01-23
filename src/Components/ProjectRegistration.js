import React from "react";
import { Form, Input, DatePicker ,Button} from "antd";
import "./ProjectRegistration.css";
const ProjectRegistration = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <>
      <section style={{ display: "flex" }}>
        <div className="form-container">
          <div>
            <h2>PROJECT DETAILS</h2>
            <hr></hr>
            <Form onFinish={onFinish}>
              <section className="section-1">
                <Form.Item
                  name="Project Name"
                  label="3.1 Project Name"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="Project Type"
                  label="3.1 Project Type"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="Project Status"
                  label="3.1 Project Status"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="Project Description"
                  label="3.4 Project Description"
                  type="description"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name="Project Start Date"
                  label="3.5 Project Start Date"
                  type="date"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  name="Project End Date"
                  label="3.6 Project End Date"
                  type="date"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <DatePicker />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="LandArea"
                  label="3.7 Total Land Area Of Approved Layout"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="CoveredArea"
                  label="3.8 Total Covered Land Area"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="OpenArea"
                  label="3.9 Total Open Area"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="LandAreaReg"
                  label="3.10 Land Area For Project Under Registration"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="CarpetArea"
                  label="3.11 Total Carpet area under approved Layout"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="CarpetareaReg"
                  label="3.12 Total carpet area for project under registration"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="noofGarage"
                  label="3.13 No.of Garage"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="areaGarage"
                  label="3.14 Area of Garage"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="openParking"
                  label="3.15 No.of Open Parking"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="noofCoveredparking"
                  label="3.16 No.of covered parking"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="areaOpenPark"
                  label="3.17 Area of open parking"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="areaCoveredparking"
                  label="3.18 Area of covered parking"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
            </Form>
          </div>
        </div>
      </section>
      <section style={{ display: "flex" }}>
        <div className="form-container">
          <div>
            <h2>PROJECT DETAILS</h2>
            <hr></hr>
            <Form onFinish={onFinish}>
              <section className="section-1">
                <Form.Item
                  name="Project Name"
                  label="3.1 Project Name"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="Project Type"
                  label="3.1 Project Type"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="Project Status"
                  label="3.1 Project Status"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="Project Description"
                  label="3.4 Project Description"
                  type="description"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name="Project Start Date"
                  label="3.5 Project Start Date"
                  type="date"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  name="Project End Date"
                  label="3.6 Project End Date"
                  type="date"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="LandArea"
                  label="3.7 Total Land Area Of Approved Layout"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="CoveredArea"
                  label="3.8 Total Covered Land Area"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="OpenArea"
                  label="3.9 Total Open Area"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="LandAreaReg"
                  label="3.10 Land Area For Project Under Registration"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="CarpetArea"
                  label="3.11 Total Carpet area under approved Layout"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="CarpetareaReg"
                  label="3.12 Total carpet area for project under registration"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="noofGarage"
                  label="3.13 No.of Garage"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="areaGarage"
                  label="3.14 Area of Garage"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="openParking"
                  label="3.15 No.of Open Parking"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
              </section>
              <section className="section-1">
                <Form.Item
                  name="noofCoveredparking"
                  label="3.16 No.of covered parking"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="areaOpenPark"
                  label="3.17 Area of open parking"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="areaCoveredparking"
                  label="3.18 Area of covered parking"
                  required
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="Primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </section>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectRegistration;
