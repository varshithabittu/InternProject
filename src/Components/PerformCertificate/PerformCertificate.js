import "./fileupload.css";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import FileSaver from "file-saver";
import { EXCEL_FILE_BASE64 } from "../constant";
import {Button} from 'antd'
const PerformCertificate = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        header: 1,
      });
      onFileUpload(sheet);
    };

    reader.readAsArrayBuffer(uploadedFile);
  };

  const downloadTemplate = () => {
    let dataBlob = EXCEL_FILE_BASE64;
    let sliceSize = 1024;
    let byteCharacters = atob(dataBlob);
    let bytesLength = byteCharacters.length;
    let slicesCount = Math.ceil(bytesLength / sliceSize);
    let byteArrays = new Array(slicesCount);
    for (let sliceIndex = 0; sliceIndex < slicesCount; sliceIndex++) {
      let begin = sliceIndex * sliceSize;
      let end = Math.min(begin + sliceSize, bytesLength);
      let bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    let blob = new Blob(byteArrays, { type: "application/vnd.ms-excel" });
    FileSaver.saveAs(new Blob([blob], {}), "my-excel.xlsx");
  };

  return (
    <div>
      <div
        style={{
          height: "70px",
          width: "95%",
          marginBottom:"20px"
        }}
      >
        <button className="styling-to-but1">Project Detail</button>
        <button className="styling-to-but2">Form1</button>
        <button className="styling-to-but3">Form1 Doc</button>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "rgb(239, 238, 236)",
            height: "40px",
            width: "95%",
          }}
        >
          {" "}
          <h3 style={{marginTop:'85px',marginBottom:'30px'}}>FORM 1 A & B OF PROJECT REGISTRATION APPLICATION-ABC</h3>
        </div>
        <br></br>
        <form className="my-formsss">
          <div
            style={{
              alignItems: "center",
              lineHeight: "0%",
              color: "orange",
              marginTop: "3%",
            }}
          >
            <h4 style={{marginLeft:'2px',marginTop:'30px',marginBottom:'10px'}}>
              PLEASE UPLOAD BLOCKWISE PHOTOGRAPHS THROUGH GUJRERA MOBILE APP
              BEFORE FILLING UP FORM1
            </h4>{" "}
          </div>
          <div className="form-group">
            <div >
              {/* <label style={{width:'100%'}}>Upload Form 1 A&B File </label>
              <div>
              <label>
                <input
                  type="file"
                  onChange={(e) => handleDrop(e.target.files)}
                  accept=".xlsx, .xls"
                />
                {file && <p>Selected File: {file.name}</p>}
              </label>
            </div> */}
            <button className="button-to-click" onClick={downloadTemplate}>
              Download Template
            </button>
              </div>
            <br></br>
            <br></br>
            <label className="styling-for-form" style={{width:'fit-content',backgroundColor:'green',color:'white',borderRadius:'5px', alignContent:'center'}}>
              UploadForm 1 A&B File
              <input
                className="file-input-1"
                type="file"
                accept=".pdf,.doc"
                name="file"
                style={{ display: "none" }}
                required
              />
            </label>
          </div>
        </form>
        <h1>
          NOTE : Filling of start dates and end dates at the time of
          registration in Form 1
        </h1>
        <p>
          Each and every intermediate activity shall be in the form of
          predecessor event and successor event with logical sequence of
          construction activity.
        </p>

        <p>
          Eg. 1. Basement and plinth work can be started after excavation work
          for raft/mat foundation. For open foundation, it may be started step
          by step as excavation
        </p>

        <p>
          {" "}
          2. Masonry work may be started after completion of RCC structure work
          for low rise building and for high rise building, it can be started
          after completion of
        </p>

        <p>
          3. Other activities like plumbing work, sewage line, electrical work,
          etc. can be started parallel with plastering and flooring work. It is
          required to put the star
        </p>
      </div>
    </div>
  );
};

export default PerformCertificate;
