import React from "react";
import Header from "./Headers/Header";
import { Routes, Route } from "react-router-dom";

import Sidemenu from "./Sidemenu";
import Prviousdetails from "./PreviousDetails/Prviousdetails";
import Promoterdetail from "./PromoterDetails/Promoterdetail";
import BlockEntry from "./BlockEntry/BlockEntry";
import AddProfessionals from "./AddProf/AddProfessionals";
import Map from "./Map";
import DevelopmentDetails from "./DevelopmentDetails/DevelopmentDetails";
import UploadDoc from "./UploadDocs/UploadDoc";
import AssignProff from "./AsignProf/AssignProff";
import Paywall from "./Payment/Paywall";
import PerformCertificate from "./PerformCertificate/PerformCertificate";
import Declaration from "./Declaration/Declaration";
import ProjectRegistration from "./ProjectDetails/ProjectRegistration";
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
        <Route path="/project-detail" element={<ProjectRegistration/>}></Route>
        <Route
          path="/development-detail"
          element={<DevelopmentDetails />}
        ></Route>
        <Route path="/add-professionals" element={<AddProfessionals />}></Route>
        <Route path="/upload-documents" element={<UploadDoc />}></Route>
        <Route path="/block-entry" element={<BlockEntry />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/assign-professionals" element={<AssignProff />}></Route>
        <Route
          path="/perform-certification"
          element={<PerformCertificate />}
        ></Route>
        <Route path="/declaration" element={<Declaration />}></Route>
        <Route path="/payment-page" element={<Paywall />}></Route>
      </Routes>
    </div>
  );
}

export default ProjectRegistrationLists;
