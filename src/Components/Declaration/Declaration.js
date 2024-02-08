import React from 'react';
import {useNavigate} from "react-router-dom"
const Input = () => <input type="checkbox" class="input2"></input>;
const Declaration = () => {
    const navigate=useNavigate();
  return (
    <>
     <h3 className="Headers">TERMS AND CONDITIONS</h3>
          <ul style={{display:'block'}}>
            <li>
              <Input />
              Agree to all Terms and Condition defined by GUURERA using Online
              Payment Facility using this Portal detailed T&C can be found
              "Terms & Conditions Section on this website. Please accept Terms
              and Conditions.
            </li>
            <br />

            <li>
              <Input />
              The required Information as per the RERA act will be displayed in
              public domain Please affirm the declarations.
            </li>
            <br />

            <li>
              <Input />
              [I/We] solemnly affirm and declare that the particulars given in
              herein e correct to my/our knowledge and bellef and
              <br />
              nothing material has been concealed by [me/us] therefrom Please
              athrm the declarations We hereby affirm and declare that.
            </li>
            <br />
            <li>
              <Input />
              I/We have read all the particulars on this website and in the
              event if this project is submitted as a New Project and found as
              "On-going at the timeof evaluation, I/We stand liable to abide by
              the actions taken as per the GUU RERA Authority Act Please affirm
              the declarations.
            </li>
          </ul>
          <button style={{backgroundColor:'green'}} onClick={()=>{navigate('/project-registration/payment-page')}}>Next</button>
    </>
  )
}

export default Declaration