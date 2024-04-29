import React, { useState } from 'react';

const AddDepartment = () => {
    const [departmentName, setDepartmentName] = useState('');

    const handleChange = (e) => {
        setDepartmentName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(departmentName);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-6">
                <div className="card border p-4">
                    <h1 className="text-center mb-4">Add Department</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Department Name:</label>
                            <input type="text" className="form-control" value={departmentName} onChange={handleChange} />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-primary btn-block w-100">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDepartment;
