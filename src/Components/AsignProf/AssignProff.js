import React from "react";
import { Link } from "react-router-dom";
import "./AssignProff.css";
const AssignProfessional = () => (
    <div className="forms">
    <div className="heading">
      <h2>FORM 1</h2>
      <hr></hr>
    </div>
    <form className="my-form" >
        <table border="1" className="my-table">
          <thead>
            <tr>
              <th>COA No</th>
              <th>Architect Name</th>
              <th>Email Id</th>
              <th>Mobile No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SAURABH ANILKUMAR JAIN</td>
              <td>tect123@gmail.com</td>
              <td>8764543534</td>
             <td>
             <button className="Nextbtn">Assign</button>
             <button className="Nextbtn">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <div className="heading">
      <h2>FORM 2</h2>
      <hr></hr>
    </div>
        <table border="1" className="my-table">
          <thead>
            <tr>
              <th>Engineer License Number</th>
              <th> Engineer Name</th>
              <th>Email Id</th>
              <th>Mobile No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SAURABH ANILKUMAR JAIN</td>
              <td>tect123@gmail.com</td>
              <td>8764543534</td>
             <td>
             <button className="Nextbtn">Assign</button>
             <button className="Nextbtn">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <div className="heading">
      <h2>FORM 2A</h2>
      <hr></hr>
    </div>
        <table border="1" className="my-table">
          <thead>
            <tr>
              <th>Engineer License Number</th>
              <th>Engineer Name</th>
              <th>Email Id</th>
              <th>Mobile No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SAURABH ANILKUMAR JAIN</td>
              <td>tect123@gmail.com</td>
              <td>8764543534</td>
             <td>
             <button className="Nextbtn">Assign</button>
             <button className="Nextbtn">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <div className="heading">
      <h2>FORM 3</h2>
      <hr></hr>
    </div>
        <table border="1" className="my-table">
          <thead>
            <tr>
              <th>CA Membership Number</th>
              <th> CA Name</th>
              <th>Email Id</th>
              <th>Mobile No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SAURABH ANILKUMAR JAIN</td>
              <td>tect123@gmail.com</td>
              <td>8764543534</td>
             <td>
             <button className="Nextbtn">Assign</button>
             <button className="Nextbtn">Delete</button></td>
            </tr>
          </tbody>
        </table>
        
      <br></br>
      <div class = "btn1">
      <Link href = "/PaymentPage">
      <button className="Nextbtn">
       Next
      </button>
      </Link></div>
      </form>
      </div>
);

const AssignProff = () => (
    <div class = "Forms">
      
      <AssignProfessional/>
    </div>
  );
  
  
  
  
  export default AssignProff;