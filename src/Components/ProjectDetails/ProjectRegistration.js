import React from 'react';
import { Form, Input, Button, Row, Col,Radio,DatePicker,Select } from 'antd';

const ProjectRegistration = () => {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item>
        <h2>PROJECT DETAIL</h2>
      </Form.Item>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="projectName" label="1.1 Project Name" rules={[{ required: true, message: 'Please input your project name!' }]}>
            <Input placeholder="Project Name*" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="projecttype" label="1.2 Project Type" rules={[{ required: true, message: 'Please input your project name!' }]}>
            <Select
            placeholder="Project Type"
            options={[
              {
                value:"Residential",
                label:"Residential",
              },
              {
                value:"Commercial",
                label:"Commercial",
              }
            ]}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
        <Form.Item name="projectstatus" label="1.3 Project Status" rules={[{ required: true, message: 'Please input your project status!' }]}>
            <Select
            placeholder="Project Status"
            options={[
              {
                value:"new",
                label:"new",
              },
              {
                value:"old",
                label:"old",
              }
            ]}
            />
          </Form.Item></Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="projectDescriptin" label="1.4 Project Description" rules={[{ required: true, message: 'Please input project description' }]}>
            <Input placeholder="Project Description" type='text'/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="projectStartDate" label="1.5 Project Start Date" rules={[{ required: true, message: 'Please input your project start date!' }]}>
            <DatePicker placeholder="Project Start Date*" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="projectEndDate" label="1.6 Project End Date" rules={[{ required: true, message: 'Please input your project end date!' }]}>
            <DatePicker placeholder="Project End Date*" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="totalLandArea" label="1.7 Total Land Area of Approved Layout (Sq Mtrs.)*" rules={[{ required: true, message: 'Please input total land area!' }]}>
            <Input placeholder="Total Land Area of Approved Layout (Sq Mtrs.)*" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="totalCoveredLandArea" label="1.8 Total Covered Land Area" rules={[{ required: true, message: 'Please input total covered land area!' }]}>
            <Input placeholder="Total Covered Land Area*" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="totalOpenLandArea" label="1.9 Total Open Land Area">
            <Input placeholder="Total Open Land Area" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="totalCarpetArea" label="1.10 Total Carpet Area" rules={[{ required: true, message: 'Please input total carpet area!' }]}>
            <Input placeholder="Total Carpet Area under approved layout*" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="totalCarpetAreaRegistration" label="1.11 Total Carpet Area Registration">
            <Input placeholder="Total Carpet Area Project under registration" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="garagesNumber" label="1.12 Garages Number" rules={[{ required: true, message: 'Please input number of garages!' }]}>
            <Input placeholder="No. of Garages*" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="totalCoveredLandAreaproject" label="1.13 Total Covered Land Area" rules={[{ required: true, message: 'Please input total covered land area!' }]}>
            <Input placeholder="Total Covered Land Area*" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="totalOpenLandAreaproject" label="1.14 Total Open Land Area">
            <Input placeholder="Total Open Land Area" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="garageArea" label="1.15 Garage Area" rules={[{ required: true, message: 'Please input garage area!' }]}>
            <Input placeholder="Area of Garage(Sq. Mtrs)*" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="openParkingArea" label="1.16 Open Parking Area">
            <Input placeholder="Area of Open Parking(Sq. Mtrs)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="coveredParkingArea" label="1.17 Covered Parking Area">
            <Input placeholder="Area of Covered Parking(Sq. Mtrs)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="projectInTPArea" label="1.18 Project In TPA area" rules={[{ required: true, message: 'Please select if project is in TP area!' }]}>
            <Input placeholder="Is the Project in TP Area?*" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="projectInTPArea" label="1.19" rules={[{ required: true, message: 'Please select if project is in TP area!' }]}>
            <Radio.Group>
              <Radio value="yes">Yes(TP Area including Gamtal Area)</Radio>
              <Radio value="no">No(Non TP Area)</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <h2 class="heading2" style={{marginBottom:"15px", marginTop:"10px"}}>PROJECT RELATED LAND REVENUE DETAILS</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="tpNo" label="1.20 TP No">
            <Input placeholder="TP No" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="tpName" label="1.21 TP Name">
            <Input placeholder="TP Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="finalPlotNo" label="1.22 Final Plot No">
            <Input placeholder="Final Plot No." />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="subPlotNo" label="1.23 Sub Plot No">
            <Input placeholder="Sub Plot No." />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="plotNo" label="1.24 Plot No">
            <Input placeholder="Plot No." />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="mojlo" label="1.25 Mojlo">
            <Input placeholder="Mojlo (Add Multiple Mojle separated by comma)*" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="revenueSurveyNo" label="1.26 Revenue Survey No">
            <Input placeholder="Revenue Survey No./Block No. (Add multiple Revenue Survey Nos. separated by comma)*" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="citySurveyNo" label="1.27 City Survey No">
            <Input placeholder="City Survey No." />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="projectAddressLine1" label="1.28 Project Address Line 1">
            <Input placeholder="Project Address Line 1*" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="projectAddressLine2" label="1.29 Project Address Line 2">
            <Input placeholder="Project Address Line 2" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="pincode" label="1.30 Pincode">
            <Input placeholder="Pincode" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="stateUT" label="1.31 State/UT">
            <Input placeholder="State/UT" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="district" label="1.32 District">
            <Input placeholder="District" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="townPlanningAuthority" label="1.33 Town Planning Authority">
            <Input placeholder="Town Planning Authority" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="taluka" label="1.34 Taluka">
            <Input placeholder="Taluka" />
          </Form.Item>
        </Col>
      </Row>
      <h2 class="heading1">PROXIMITY</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="fireStationDistance" label="1.35 Fire Station Distance from the Projects(Km)">
            <Input placeholder="Fire Station Distance from the Projects(Km)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="hospitalDistance" label="1.36 Multi-Speciality Hospital Distance From Projects(Km)">
            <Input placeholder="Multi-Speciality Hospital Distance From Projects(Km)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="railwayStationDistance" label="1.37 Main Railways Station Distance from the Projects(Km)">
            <Input placeholder="Main Railways Station Distance from the Projects(Km)" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="policeStationDistance" label="1.38 Police Station Distance from the Projects(Km)">
            <Input placeholder="Police Station Distance from the Projects(Km)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="publicGardenDistance" label="1.39 Public Garden Distance From Projects(Km)">
            <Input placeholder="Public Garden Distance From Projects(Km)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="publicTransitDistance" label="1.40 Public Transit Distance from the Projects(Km)">
            <Input placeholder="Public Transit Distance from the Projects(Km)" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Form.Item name="ulbServiceDeliveryPointDistance" label="1.41 ULB Service delivery point Distance from the Projects(Km)">
            <Input placeholder="ULB Service delivery point Distance from the Projects(Km)" />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item name="airportDistance" label="1.42 Airport Distance From Projects(Km)">
            <Input placeholder="Airport Distance From Projects(Km)" />
          </Form.Item>
        </Col>
        </Row>
        <h2 class="heading1">GROUND WATER LEVEL</h2>
        <Row>
        <Col span={8}>
          <Form.Item name="soilTestingReport" label="1.43 Soil Testing report*">
            <Input placeholder="Soil Testing report*" />
          </Form.Item>
        </Col>
      </Row>
      <h2 class="heading1" style={{marginBottom:"10px"}}>BANK DETAIL</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="accountNameRera" label="1.44 Expected name of Project RERA Bank Account as per RERA banking Directions RERA A/C for">
            <Input placeholder="Expected name of Project RERA Bank Account as per RERA banking Directions RERA A/C for" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="promoterName" label="1.45 Promoter Name">
            <Input placeholder="Promoter Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="accountHolderName" label="1.46 A/c Holder Name as per Bank Statement">
            <Input placeholder="A/c Holder Name as per Bank Statement" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="accountNumber" label="1.47 Account Number">
            <Input placeholder="Account Number" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="ifscCode" label="1.48 IFSC Code">
            <Input placeholder="IFSC Code" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="bankName" label="1.49 Bank Name">
            <Input placeholder="Bank Name" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="branchName" label="1.50 Branch Name">
            <Input placeholder="Branch Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="pincode" label="1.51 Pincode">
            <Input placeholder="Pincode" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="stateUT" label="1.52 State/UT">
            <Input placeholder="State/UT" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Next
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ProjectRegistration;
