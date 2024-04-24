import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/dashboard/AdminDashboard';
import AddStaff from './components/addStaff/AddStaff';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/adminDashboard' element={<AdminDashboard />} />
                <Route path='/addstaff' element={<AddStaff />} />
            </Routes>
        </Router>
    );
}

export default App;
