import React from 'react';
import Header from './Header';
import {Routes,Route} from 'react-router-dom';
import ProjectRegistration from './ProjectRegistration';
import Sidemenu from './Sidemenu';
import Prviousdetails from './Prviousdetails';
import Promoterdetail from './Promoterdetail';
import BlockEntry from './BlockEntry';
import AddProfessionals from './AddProfessionals';
import Map from './Map';
import Login from './Login';
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';
const ProjectRegistrationLists = () => {
  return (
    <div style={{width:'100%'}}>
        <Header/>
        <div style={{display:'flex',flexDirection:'row'}}>
            <Sidemenu/>
            <Content/>
        </div>
    </div>
  );
};
function Content(){
    return(
        <div>
            <Routes>
                <Route path='/promoter-detail' element={<Promoterdetail/>}></Route>
                <Route path='/previous-project' element={<Prviousdetails/>}></Route>
                <Route path='/project-detail' element={<ProjectRegistration/>}></Route>
                <Route path='/development-detail' element={<div>development details</div>}></Route>
                <Route path='/add-professionals' element={<AddProfessionals/>}></Route>
                <Route path='/upload-documents' element={<div>upload document</div>}></Route>
                <Route path='/block-entry' element={<BlockEntry/>}></Route>
                <Route path='/map' element={<Map/>}></Route>
                <Route path='/assign-professionals' element={<div>assign professionals</div>}></Route>
                <Route path='/perform-certification' element={<div>perform certification</div>}></Route>
                <Route path='/declaration' element={<div>declaration</div>}></Route>
                <Route path='/payment-page' element={<div>payment page</div>}></Route>
            </Routes>
        </div>
    );
}

export default ProjectRegistrationLists;
