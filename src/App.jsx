import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/dashboard/AdminDashboard';
import AddStaff from './components/addStaff/AddStaff';
import EditStaff from './components/editStaff/EditStaff';
import AddClients from './components/addClients/AddClients';
import AddDepartment from './components/addDepartment/AddDepartment';
import AllStaffs from './components/allStaffs/AllStaffs';
import EditClients from './components/editClients/EditClients';
import AllClients from './components/allClients/AllClients';
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/adminDashboard' element={<AdminDashboard />} />
                <Route path='/addstaff' element={<AddStaff />} />
                <Route path='/editstaff' element={<EditStaff />} />
                <Route path='/allstaffs' element={<AllStaffs />} />
                <Route path='/addclients' element={<AddClients />} />
                <Route path='/allclients' element={<AllClients />} />
                <Route path='/editclients' element={<EditClients />} />
                <Route path='/adddepartment' element={<AddDepartment />} />
            </Routes>
        </Router>
    );
}

export default App;
