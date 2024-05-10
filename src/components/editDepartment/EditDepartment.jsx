import React, { useState } from 'react';

const EditDepartment = () => {
    const [departmentName, setDepartmentName] = useState('');

    const handleChange = (e) => {
        setDepartmentName(e.target.value);
    };

    const handleEdit = () => {
        // Handle edit action here
        console.log("Editing department:", departmentName);
    };

    const handleDelete = () => {
        // Handle delete action here
        console.log("Deleting department:", departmentName);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-6">
                <div className="card border p-4">
                    <h1 className="text-center mb-4">Edit Department</h1>
                    <div className="mb-3">
                        <label className="form-label">Department Name:</label>
                        <input type="text" className="form-control" value={departmentName} onChange={handleChange} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary w-100 mb-2" onClick={handleEdit}>Edit Department</button>
                        <button className="btn btn-danger w-100" onClick={handleDelete}>Delete Department</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditDepartment;
