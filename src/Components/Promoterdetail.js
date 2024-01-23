import React from 'react'
import './Promoterdetails.css';
const Promoterdetail = () => {
    const Input = ({ label, placeholder }) => (
        <div class="Input">
          <label class ="label">{label}</label>
          <input class ="maininput" type="text" placeholder={placeholder} />
        </div>
      );
  return (
    <form>
    <h2 class="heading1">PROJECT DETAIL</h2>
    <div class='projectdetails'>
      <div class="labels">
        <Input label="1.1 Project Name*" placeholder="Kunj Vani Villa" />
        <Input label="1.2 Project Type*" placeholder="Residential" />
        <Input  label="1.3 Project Description*" placeholder="Flat with all facilities..." />
      </div>
      <div class='bigdiv' >
        <Input label="1.4 Explanatory Note by Promoter (Reasons)*" placeholder="Guidance on Scenario (Circular 8 - PDF)" />
      </div>
      <div class="labels">
        <Input label="1.5 Project Start Date*" placeholder="05/04/2020" />
        <Input label="1.6 Project End Date*" placeholder="31/01/2024" />
        <Input label="1.7 Total Land Area of Approved layout(Sq Mtrs.)*" placeholder="5432223" />
      </div>
      <div class="labels">
        <Input label="1.8 Total Covered Land Area*" placeholder="453389" />
        <Input label="1.9 Total Open Land Area" placeholder="1298776" />
        <Input label="1.10 Land Area for Project Under Registration*" placeholder="66544" />
      </div>
      <div class="labels">
        <Input label="1.11 Total Carpet Area under approved layout*" placeholder="544344" />
        <Input label="1.12 Total Carpet Area Project under registration" placeholder="4500" />
        <Input label="1.13 No. of Garages*" placeholder="5" />
      </div>
      <div class="labels">
        <Input label="1.14 Total Covered Land Area*" placeholder="453389" />
        <Input label="1.15 Total Open Land Area" placeholder="1298776" />
        <Input label="1.16 Area of Garage(Sq. Mtrs)*" placeholder="655" />
      </div>
      <div class="labels">
        <Input label="1.17 Area of Open Parking*(Sq. Mtrs)" placeholder="453389" />
        <Input label="1.18 Area of Covered Parking*(Sq. Mtrs)" placeholder="1298776" />
      </div>
      <div class="radioinput">
        <label class="openlabel"> 1.19 Is the Project in TP Area?*</label>
        <input type="radio" placeholder="" name='tparea'/>Yes(TP Area including Gamtal Area)
        <input type="radio" placeholder="" name='tparea'/>No(Non TP Area)
        
      </div>
    </div>


    <h2 class="heading2">PROJECT RELATED LAND REVENUE DETAILS</h2>
    <div id="head2div">
      <div class="labels">
        <Input label="1.20 TP No" placeholder="" />
        <Input label="1.21 TP Name" placeholder="" />
        <Input label="1.22 Final Plot No." placeholder="" />
      </div>
      <div class="labels">
        <Input label="1.23 Sub Plot No." placeholder="" />
        <Input label="1.24 Plot No." placeholder="" />
        <Input label="1.25 Mojlo (Add Multiple Mojle separated by comma)*" placeholder="mojlo/abc" />
      </div>
      <div class="longlabels labels">
        <Input label="1.26 Revenue Survey No./Block No.(Add multiple Revenue Survey Nos. seperated by comma)*" placeholder="na" />
        <Input label="1.27 City Survey No." placeholder="na" />
      </div>

      <div class="labels Adrlabels">
        <Input label="1.28 Project Address Line 1*" placeholder="Vastrapur Road" />
        <Input label="1.29 Project Address Line 2" placeholder="" />
      </div>

      <div class="labels">
        <Input label="1.30 Pincode" placeholder="380051" />
        <Input label="1.31 State/UT" placeholder="Gujrat" />
        <Input label="1.32 District" placeholder="Ahmedabad" />
      </div>
      <div class="labels">
        <Input label="1.33 Town Planning Authority" placeholder="Balva Muncipality" />
        <Input label="1.34 Taluka" placeholder="Ahmedabad City" />
      </div>


    </div>
    <div>
        <section >
          <h2 class="heading1">PROXIMITY</h2>
          <div class='projectdetails'>
          <div class="labels">
             <Input label="1.35 Fire Station Distance from the Projects(Km)" placeholder="2" />
             <Input label="1.36 Multi-Speciality Hospital Distance From Projects(Km)" placeholder="2" />
             <Input label="1.37 Main Railways Station Distance from the Projects(Km)" placeholder="2" />
          </div>          
          <div class="labels">
             <Input label="1.38 Police Station Distance from the Projects(Km)" placeholder="2" />
             <Input label="1.39 Public Garden Distance From Projects(Km)" placeholder="2" />
             <Input label="1.40 Public Transit Distance from the Projects(Km)" placeholder="2" />
          </div> 
          <div class="labels longlabels">
             <Input label="1.41 ULB Service delivery point Distance from the Projects(Km)" placeholder="2" />
             <Input label="1.42 Airport Distance From Projects(Km)" placeholder="2" />
          </div>
          </div>
          
        </section>

        <section >
          <h2 class="heading1">GROUND WATER LEVEL</h2>
          <div class='projectdetails'>
            <label class="openlabel">1.43 Soil Testing report*</label>
            <h4>Not Applicable</h4>
          </div>
        </section>

        <section>
          <h2 class="heading1">BANK DETAIL</h2>
          <div class="projectdetails hrule">
          <div class="labels twolabels longlabels">
            <Input label="Expected name of Project RERA Bank Account as per RERA banking Directions RERA A/C for " placeholder="Kunj jang Villa" />
            <Input label="Promoter Name" placeholder="GINGER PROPERTIES PRIVATE LIMITED" />
          </div>
          <div class="labels">
            <Input label="1.44 A/c Holder Name as per Bank Statement" placeholder="Diksha" />
            <Input label="1.45 Account Number" placeholder="8965545653232" />
            <Input label="1.46 IFSC Code" placeholder="ICIC0003244" />
          </div>
          <div class="labels">
            <Input label="1.47 Bank Name" placeholder="ICICI BANK LIMITED" />
            <Input label="1.48 Branch Name" placeholder="ISKON CROSS ROAD" />
            <Input label="1.49 Pincode" placeholder="350015" />
          </div>
          <div class="labels">            
            <Input label="1.50 State/UT" placeholder="Gujrat" />
            <Input label="1.51 District" placeholder="Ahmedabad" />
            <Input label="1.52 Taluka" placeholder="Ahmedabad City" />
        </div>
        </div>

        </section>

        <div class="btndiv">
          <button class="grnbtn" type="submit">
            Next
          </button>
        </div>
      </div>
    {/* Add more input fields or other form elements as needed */}
  </form>
  )
}

export default Promoterdetail