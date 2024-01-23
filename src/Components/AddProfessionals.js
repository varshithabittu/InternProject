import React, { useState } from "react";
import './MyForm.css';
function AddProfessionals(){
    return(
        <>
        <MyForm/>
        <ArchitectForm/>
        <Streng/>
        <Cont/>
        </>
    );
}
const MyForm = () => {
    const [formData, setFormData] = useState({
      panNo: '',
      panNo1: '',
      names: '',
      mobile:'',
      reraNo: '',
      email: '',
      address: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Form Data:', formData);
      // You can send the form data to your server or perform any other actions
    };
  
    return (
      <div className="forms">
        <div className="heading"><br></br>
        <h2>AGENT (ONLY REGISTERED WITH GUJRERA)</h2>
        <p>(SEE SECTION 4.11. GENERAL RULE 3.4. AUTHORITY RULE 10. REGULATION AND ORDERS)</p>
        <hr></hr>
        </div>
       
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='labels'>
            PAN No :<br></br>
            <input 
              type="text"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
              required
            />
             <button className="submit-button">Search</button>
          </label>
  
          <label>
            RERA Registration No :<br></br>
            <input className="inputs"
              type="text"
              name="reraNo"
              value={formData.reraNo}
              onChange={handleChange}
              required
            />
          </label>
  
          <label>
            Name :<br></br>
            <input className="inputs"
              type="text"
              name="names"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
        <label>
            PAN No. :<br></br>
            <input className="inputs"
              type="text"
              name="panNo1"
              value={formData.panNo1}
              onChange={handleChange}
              required
            />
          </label>
        
          <label>
            Email Id :<br></br>
            <input className="inputs"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
  
          <label>
            Mobile No. :<br></br>
            <input className="inputs"
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
        </div>
  
        <div className="form-group">
          <label>
            Address :<br></br>
            <input className="inputs"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          </div> 
        <button className="add-button">
          Add
        </button>
       
      </form>
      </div>
     
    );
  };
  const ArchitectForm = () => {
    const [formData, setFormData] = useState({
      coaNumber: '',
      regNumber: '',
      emailId: '',
      mobileNo: '',
      name: '',
      address: '',
      professionalExperienceInYrs: '',
      noOfKeyProjectsCompleted: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data submitted', formData);
    };
  
    return (
      <div className="forms">
        <div className="heading">
        <h2>ARCHITECT (ONLY REGISTERED WITH GUJRERA)</h2>
        <p>(SEE SECTION 4.11. GENERAL RULE 3.4. AUTHORITY RULE 10. REGULATION AND ORDERS)</p>
        <hr></hr>
        </div>
      <form className="my-form" onSubmit={handleSubmit}>
          <table border="1" className="my-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Mobile No.</th>
                <th>Address</th>
                <th>PEin Yrs.</th>
                <th>No. of key Projects</th>
                <th>Reg. No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>SAURABH ANILKUMAR JAIN</td>
                <td>tect123@gmail.com</td>
                <td>8764543534</td>
                <td>6, Shreedhay society, opp</td>
                <td>23</td>
                <td>43</td>
                <td>CA/2019/112403</td>
               <button className="submit-button">Delete</button>
              </tr>
            </tbody>
          </table>
          <br></br>
          <div className="form-group">
          <label>
            CoA Number :<br></br>
            <input type="text" name="coaNumber" value={formData.coaNumber} onChange={handleChange}
            required />
            <button className="submit-button">Search</button>
          </label>
          <label>
           Req. No. :<br></br>
            <input className="inputs" type="text" name="regNumber" value={formData.regNumber} onChange={handleChange}
            required />
          </label>
          <label>
            Name :<br></br>
            <input className="inputs" type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          </div>
          <div className="form-group">
          <label>
            Email Id :<br></br>
            <input className="inputs" type="text" name="emailId" value={formData.emailId} onChange={handleChange}
            required />
          </label>
          <label>
            Mobile No. :<br></br>
            <input className="inputs" type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange}
            required />
          </label>
          
          <label>
            Address :<br></br>
            <input className="inputs" type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          </div>
          <div className="form-group">
          <label>
            No of Key Project Completed :<br></br>
            <input type="text" name="noOfKeyProjectsCompleted" value={formData.noOfKeyProjectsCompleted} onChange={handleChange} />
          </label>
          <label>
            Professional Exp. in Yrs. :<br></br>
            <input className="inputs" type="text" name="professionalExperienceInYrs" value={formData.professionalExperienceInYrs} onChange={handleChange} />
          </label>
          </div>
         
          <button  className="add-button">
         Add
        </button>
        
  
        </form>
        </div>
    );
  };
  const Streng = () => {
    const [formData, setFormData] = useState({
      panNumber: '',
      panNumber1: '',
      liNumber: '',
      name: '',
      emailId: '',
      mobileNo: '',
      address: '',
      professionalExperienceInYrs: '',
      noOfKeyProjectsCompleted: ''
      
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data submitted', formData);
    };
  
    return (
      <div className="forms">
      <div className="heading">
        <h2>STRUCTURAL (ONLY REGISTERED WITH GUJRERA)</h2>
        <p>(SEE SECTION 4.11. GENERAL RULE 3.4. AUTHORITY RULE 10. REGULATION AND ORDERS)</p>
        <hr></hr>
      </div>
      <form className="my-form" onSubmit={handleSubmit}>
          <table border="1" className="my-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Mobile No.</th>
                <th>PAN No.</th>
                <th>Address</th>
                <th>PEin Yrs.</th>
                <th>No. of key Projects</th>
                <th>License. No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>SAURABH ANILKUMAR JAIN</td>
                <td>tect123@gmail.com</td>
                <td>8764543534</td>
                <td>AEWPD8802P</td>
                <td>Hyderabad</td>
                <td>43</td>
                <td>34</td>
                <td>kenn123</td>
               <button className="submit-button">Delete</button>
              </tr>
            </tbody>
          </table>
          <br></br>
          <div className="form-group">
          <label>
            PAN No. :<br></br>
            <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange}
            required />
            <button className="submit-button">Search</button>
          </label>
          <label>
          License No. :<br></br>
            <input className="inputs" type="text" name="liNumber" value={formData.liNumber} onChange={handleChange}
            required />
          </label>
          <label>
            Name :<br></br>
            <input className="inputs" type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          </div>
          <div className="form-group">
          <label>
            Email Id :<br></br>
            <input className="inputs" type="text" name="emailId" value={formData.emailId} onChange={handleChange}
            required />
          </label>
          <label>
            Mobile No. :<br></br>
            <input className="inputs" type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange}
            required />
          </label>
          <label>
            PAN No. :<br></br>
            <input className="inputs" type="text" name="panNumber1" value={formData.panNumber1} onChange={handleChange}
            required />
            
          </label>
          </div>
          <div className="form-group">
          <label>
          
            Address :<br></br>
            <input className="inputs" type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          
          
          <label>
            No of Key Project Completed :<br></br>
            <input type="text" name="noOfKeyProjectsCompleted" value={formData.noOfKeyProjectsCompleted} onChange={handleChange} />
          </label>
          <label>
            Professional Experience in Yrs. :<br></br>
            <input className="inputs" type="text" name="professionalExperienceInYrs" value={formData.professionalExperienceInYrs} onChange={handleChange} />
          </label>
          </div>
         
          <button  className="add-button">
         Add
        </button>
        </form>
        </div>
    );
  };
  const Cont = () => {
    const [formData, setFormData] = useState({
      panNumber: '',
      emailId: '',
      name: '',
      mobileNo: '',
      panNumber1: '',
      address: '',
      professionalExperienceInYrs: '',
      noOfKeyProjectsCompleted: ''
      
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data submitted', formData);
    };
  
    return (
      <div className="forms">
      <div className="heading">
        <h2>CONTRACTOR (ONLY REGISTERED WITH GUJRERA)</h2>
        <p>(SEE SECTION 4.11. GENERAL RULE 3.4. AUTHORITY RULE 10. REGULATION AND ORDERS)</p>
        <hr></hr>
      </div>
      <form className="my-form" onSubmit={handleSubmit}>
          <table border="1" className="my-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Mobile No.</th>
                <th>PAN No.</th>
                <th>Address</th>
                <th>PEin Yrs.</th>
                <th>No. of key Projects</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>SAURABH ANILKUMAR JAIN</td>
                <td>tect123@gmail.com</td>
                <td>8764543534</td>
                <td>AEWPD8802P</td>
                <td>Hyderabad</td>
                <td>43</td>
                <td>34</td>
               <button className="submit-button">Delete</button>
              </tr>
            </tbody>
          </table>
          <br></br>
          <div className="form-group">
          <label>
            PAN Number :<br></br>
            <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange}
            required />
            <button className="submit-button">Search</button>
          </label>
          <label>
            Email Id :<br></br>
            <input className="inputs" type="text" name="emailId" value={formData.emailId} onChange={handleChange}
            required />
          </label>
          <label>
            Name :<br></br>
            <input  className="inputs"type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          </div>
          <div className="form-group">
          
          <label>
            Mobile No :<br></br>
            <input className="inputs" type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange}
            required />
          </label>
          <label>
            PAN Number :<br></br>
            <input className="inputs" type="text" name="panNumber1" value={formData.panNumber1} onChange={handleChange}
            required />
            
          </label>
          
          <label>
          
            Address :<br></br>
            <input className="inputs" type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          
          </div>
          <div className="form-group">
  
          <label>
            No of Key Project Completed :<br></br>
            <input type="text" name="noOfKeyProjectsCompleted" value={formData.noOfKeyProjectsCompleted} onChange={handleChange} />
          </label>
          <label>
            Professional Experience in Yrs. :<br></br>
            <input className="inputs" type="text" name="professionalExperienceInYrs" value={formData.professionalExperienceInYrs} onChange={handleChange} />
          </label>
          
          </div>
          <button type="submit" className="add-button">
         Add
        </button>
        
        <br></br>
        <button  className="submit-buttons">
         Previous
        </button>
        <button className="submit-button">
         Next
        </button>
        
        </form>
        </div>
    );
  };
  export default AddProfessionals;