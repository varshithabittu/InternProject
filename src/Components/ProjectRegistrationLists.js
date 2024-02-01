import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import ProjectRegistration from "./ProjectRegistration";
import Sidemenu from "./Sidemenu";
import Prviousdetails from "./Prviousdetails";
import Promoterdetail from "./Promoterdetail";
import BlockEntry from "./BlockEntry";
import AddProfessionals from "./AddProfessionals";
import Map from "./Map";
import DevelopmentDetails from "./DevelopmentDetails";
import UploadDoc from "./UploadDoc";
import AssignProff from "./AssignProff";
import Paywall from "./Paywall";
import PerformCertificate from "./PerformCertificate";
import Declaration from "./Declaration";
// import Dashboard from './Dashboard';
// import PerformCertifi from './PerformCertifi';
const ProjectRegistrationLists = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidemenu />
        <Content />
      </div>
    </div>
  );
};
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/promoter-detail" element={<Promoterdetail />}></Route>
        <Route path="/previous-project" element={<Prviousdetails />}></Route>
        <Route path="/project-detail" element={<ProjectRegistration />}></Route>
        <Route
          path="/development-detail"
          element={<DevelopmentDetails />}
        ></Route>
        <Route path="/add-professionals" element={<AddProfessionals />}></Route>
        <Route
          path="/upload-documents"
          element={<UploadDoc/>}
        ></Route>
        <Route path="/block-entry" element={<BlockEntry />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route
          path="/assign-professionals"
          element={<AssignProff/>}
        ></Route>
        <Route
          path="/perform-certification"
          element={<PerformCertificate/>}
        ></Route>
        <Route path="/declaration" element={<Declaration/>}></Route>
        <Route path="/payment-page" element={<Paywall/>}></Route>
      </Routes>
    </div>
  );
}

export default ProjectRegistrationLists;
