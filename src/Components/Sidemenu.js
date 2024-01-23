import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { SwitcherOutlined } from "@ant-design/icons/lib/icons";
function Sidemenu() {
  const location = useLocation();
  return (
    <div>
      <Menu selectedKeys={[location.pathname]}>
          <Menu.Item key="/project-registration/promoter-detail" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/promoter-detail">Promoter Details</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/previous-project" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/previous-project">Previous Project</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/project-detail" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/project-detail">Project Details</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/development-detail" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/development-detail">Development Details</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/add-professionals" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/add-professionals">Add Professionals</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/upload-documents" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/upload-documents">Upload Documents</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/block-entry" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/block-entry">Block Entry</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/map" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/map">Map</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/assign-professionals" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/assign-professionals">Assign Professionals</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/perform-certification" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/perform-certification">Perform Certification</Link>
          </Menu.Item> 
          <Menu.Item key="/project-registration/declaration" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/declaration">Declaration</Link>
          </Menu.Item>
          <Menu.Item key="/project-registration/payment-page" icon={<SwitcherOutlined/>}>
            <Link to="/project-registration/payment-page">Payment Page</Link>
          </Menu.Item>
        </Menu>
    </div>
  );
}

export default Sidemenu;
