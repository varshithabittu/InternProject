import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { SwitcherOutlined } from "@ant-design/icons/lib/icons";
function Sidemenu() {
  const location = useLocation();
  return (
    <div>
      <Menu selectedKeys={[location.pathname]}>
          <Menu.Item key="/promoter-detail" icon={<SwitcherOutlined/>}>
            <Link to="/promoter-detail">Promoter Details</Link>
          </Menu.Item>
          <Menu.Item key="/previous-project" icon={<SwitcherOutlined/>}>
            <Link to="/previous-project">Previous Project</Link>
          </Menu.Item>
          <Menu.Item key="/project-detail" icon={<SwitcherOutlined/>}>
            <Link to="/project-detail">Project Details</Link>
          </Menu.Item>
          <Menu.Item key="/development-detail" icon={<SwitcherOutlined/>}>
            <Link to="/development-detail">Development Details</Link>
          </Menu.Item>
          <Menu.Item key="/add-professionals" icon={<SwitcherOutlined/>}>
            <Link to="/add-professionals">Add Professionals</Link>
          </Menu.Item>
          <Menu.Item key="/upload-documents" icon={<SwitcherOutlined/>}>
            <Link to="/upload-documents">Upload Documents</Link>
          </Menu.Item>
          <Menu.Item key="/block-entry" icon={<SwitcherOutlined/>}>
            <Link to="/block-entry">Block Entry</Link>
          </Menu.Item>
          <Menu.Item key="/map" icon={<SwitcherOutlined/>}>
            <Link to="/map">Map</Link>
          </Menu.Item>
          <Menu.Item key="/assign-professionals" icon={<SwitcherOutlined/>}>
            <Link to="/assign-professionals">Assign Professionals</Link>
          </Menu.Item>
          <Menu.Item key="/perform-certification" icon={<SwitcherOutlined/>}>
            <Link to="/perform-certification">Perform Certification</Link>
          </Menu.Item> 
          <Menu.Item key="/declaration" icon={<SwitcherOutlined/>}>
            <Link to="/declaration">Declaration</Link>
          </Menu.Item>
          <Menu.Item key="/payment-page" icon={<SwitcherOutlined/>}>
            <Link to="/payment-page">Payment Page</Link>
          </Menu.Item>
        </Menu>
    </div>
  );
}

export default Sidemenu;
