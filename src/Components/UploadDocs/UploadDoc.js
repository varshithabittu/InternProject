import React from "react";
import { Link } from "react-router-dom";
import './UploadDoc.css';
const Input1 = () => <input type="checkbox" class="input2"></input>;
const Input = ({ label }) => (
  <>
    <div class="Input">
      <label class="label">{label}</label>
      <label htmlFor="file-upload" className="custom-file-upload">
        <i className="fa fa-cloud-upload" ></i> File Upload
      </label>
      <input id="file-upload" type="file" />
    </div>
  </>
);
const Input2 = ({ label, placeholder, type }) => (
  <div class="li">
    <label>{label}</label>
    <input type={type} placeholder={placeholder} />
  </div>
);

class UploadDoc extends React.Component {
  render() {
    return (
      <form>
        <h2 class="heading1">DOCUMENTS</h2>
        <h2 class="heading1">TECHNICAL DOCUMENTS</h2>
        <div class="projectdetails">
          <div class="labels">
            <Input label="4.1 Approved Building/Plotting Plan*" />
            <Input label="4.2 Approved Layout Plan*" />
            <Input label="4.3 Promoter’s affidavit & 2/3 allottee approval/consent as for section 14 (2) (2) of RERA Act.*" />
          </div>
          <div class="labels">
            <Input label="4.4 Approved Section Plan/Infrastructure Plan*" />
            <Input label="4.5 Area Development Plan of Project Area*" />
            <Input label="4.6 Draft Brochure*" />
          </div>
          <div class="labels">
            <Input label="4.7 Project Photo (JPG only)*" placeholder="453389" />
            <Input
              label="4.8 Non Agriculture (NA) Order and Fire Opinion From Authority"
              placeholder="1298776"
            />
          </div>
        </div>
        <div class="box">
            <div class="boxhead">
              <h2 class="boxheading">LEGAL DOCUMENTS</h2>
            </div>

            <div class="boxele">
              <div>
                <h5 class="Headers">
                  Land Documents/Ownership documents/Conveyance Deed*
                </h5>
                <h5>
                  (Registered Purchase/sale Deed with index copy, Registered
                  Gift Deed with index copy,Will,Registered Release Deed with
                  index copy)
                </h5>
              </div>
              <div class="onlyflex mar">
                <input type = "text" id = "search" />
                <button class="grnbtn">Search</button>
              </div>
              <div class="flex">
                <div class="mar">
                  <Input2
                    label="4.9 Date of Issuance of documents"
                    type="date"
                  />
                </div>
                <div class="mar"> 
                  <Input2 label="4.10 Land Owner Name" placeholder="NG GROUP FINANCIAL SERVICE"/>
                </div>
                <div class="mar">
                  <Input2 type="tel" label="4.11 Contact Details" placeholder="9908663427"/>
                </div>
                <div class="docin mar">
                  <Input label="4.12 Document*"/>
                </div>
              </div>
            </div>
          </div>

        <div>
          {/* <p> */}
          <h3 className="Headers">4.42 DECLARATIONS</h3>
          We, as promoter, hereby confirm below aspects covered in our
          application. Application is eligible for Rejection in case below
          aspects are not adhered to:
          <ul>
            <li>
              <Input1 />
              Provision of Drainage and/or Availability of STP (mentioned in
              Layout Plan) is available/planned in this project.
            </li>
            <li>
              <Input1 />
              We as Promoter hold no rights on FSI on Terrace post BU as per
              clause in Sale Deed.
            </li>
            <li>
              <Input1 />
              The Carpet Area and Drainage Line is clearly mentioned as per the
              Approved Plans/ In case, Carpet Area and Drainage Line is not
              mentioned in Approved Plans, the affidavit for Carpet Area and
              Drainage is attached along with Form B Declaration field.
            </li>
            <li>
              <Input1 />
              The Uploaded Affidavits (Form B and B1,B2 (in case of Joint
              Development Agreement - if applicable) is duly notarized)
            </li>
            <li>
              <Input1 />
              The Fire Officer opinion is to be obtained for the building , if
              applicable as per the regulations of the prevailing GDCR . For
              more details , click here
            </li>
            <li>
              <Input1 />
              Only the Approved plans are uploaded
            </li>
            <li>
              <Input1 />
              I/We , adhere to all provisions described in Order – 50 DIRECTION
              FOR SUBMISSION OF PROPER DOCUMENTS AT THE TIME OF PROJECT
              REGISTRATION APPLICATION., Know More
            </li>
          </ul>
          {/* </p> */}
        </div>

        {/* Add more  sections as needed */}

        <div class="btn1">
          <Link href="/BlockEntry">
            <button class="Nextbtn" type="submit">
              Next
            </button>
          </Link>
        </div>

        {/* Add more input fields or other form elements as needed */}
      </form>
    );
  }
}

export default UploadDoc;