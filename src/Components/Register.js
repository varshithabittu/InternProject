import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const Register = ({onSuccess}) => {
    const navigate=useNavigate();
    return (
        <div>
            <h1 style={{fontFamily:'sans-serif',fontWeight:'bold',textAlign:'center'}}>Registration Form</h1>
            <div></div>
                <div className="heading"><h2>PROMOTER (CO-PROMOTER/ LANDOWNER IN CASE OF JOINT DEVELOPMENT AGREEMENT) ENROLLMENT FORM</h2> </div>  
                <p>(SEE SECTION 4, 11, GENERAL RULE 3, 4, AUTHORITY RULE 10, REGULATION AND ORDERS)</p>
                <div >
                   <div className="for-kyc"> <h2>KYC</h2></div><br></br>
                    <form className="my-form">
                        <div className="form-group">
                            <div className="required-fields">
                        <label for="panNo">
                            PAN No :<br></br><br></br>
                            <input 
                            type="number"
                            name="panNo"
                            id="panNo"
                            required
                            />
                        </label>
                        </div>
                        <div className="required-fields">
                        <label>
                            Name :<br></br><br></br>
                            <input
                            type="text"
                            name="names"
                            required
                            />
                        </label></div>
                        
                        <div className="required-fields">
                        <label>
                            Email Id :<br></br><br></br>
                            <input 
                            type="email"
                            name="email"
                            required
                            />
                        </label></div>
                        </div>
                        <br></br><br></br>
                        <div className="form-group">
                       
                        <div className="required-fields">
                        <label>
                            Mobile No. :<br></br><br></br>
                            <input 
                            type="number"
                            name="mobile"
                            required
                            />
                        </label></div>
                    
                        <div>
                        <label>
                            Occupation :<br></br><br></br>
                            <input 
                            type="text"
                            name="address"
                            required
                            />
                        </label></div>
                        <div className="required-fields">
                        <label for="comName">
                            Company Name :<br></br><br></br>
                            <input 
                            type="text"
                            name="comName"
                            id="comName"
                            required
                            />
                        </label>
                        </div>
                        </div><br></br><br></br>
                        <div className="form-group">
                        <div className="required-fields">
                        <label>
                            State :<br></br><br></br>
                            <input 
                            type="text"
                            name="state"
                            required
                            />
                        </label></div>

                        <div className="required-fields">
                        <label>PAN CARD    </label><br></br><br></br>
                        <label className="styling"><span><i class="fa-solid fa-upload"></i>
                           upload file </span>
                            <input 
                            type="file"
                            accept=".pdf,.doc"
                            name="file"
                            required
                            />
                        </label></div>
                        <span></span><span></span>
                        <div className="required-fields">
                        <label>
                            Photograph :</label><br></br><br></br>
                            <label className="styling"><span><i class="fa-solid fa-upload"></i>
                           upload image </span>
                            <input 
                            accept=".jpg,.png"
                            type="file"
                            name="photograph"
                            required
                            />
                            </label>
                       </div>
                        </div>
                    </form>
                    <div className="heading" style={{marginTop:'250px'}}><h2 style={{textDecoration:'none'}}>DECLARATION</h2> </div>
                    <p>  I hereby declare that the details provided above are true and correct to the best of my knowledge, belief and professional certification (if applicable). In case any of the above information is found to be false or untrue or misleading or misrepresenting, I am liable for any legal action as may be decided by Gujarat RERA Authority.</p>
                    <br></br>
                    <button onClick={()=>{
                        onSuccess();
                        navigate('/registration-form');
                    }}>Create User</button>
                </div>

        </div>
    )
}

export default Register;