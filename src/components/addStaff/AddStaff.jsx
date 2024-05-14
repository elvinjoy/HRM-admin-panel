import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStaff = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        joiningDate: '',
        phoneNumber: '',
        dob: '',
        address: '',
        image: '',
        designation: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, you can send the formData to an API or perform any other action
        console.log(formData);
    };

    return (
        <div className="container">
            <h1 className="mt-3 mb-3 text-center">Welcome to Add Staff Page</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password:</label>
                                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date of Birth:</label>
                                <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number:</label>
                                <input type="tel" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Joining Date:</label>
                                <input type="date" className="form-control" name="joiningDate" value={formData.joiningDate} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address:</label>
                                <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image:</label>
                                <input type="file" className="form-control" name="image" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Designated Role:</label>
                                <select className="form-control" name="designation" value={formData.designation} onChange={handleChange}>
                                    <option value="">Select Role</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Team Lead">Team Lead</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Department</label>
                                <select className="form-control" name="designation" value={formData.designation} onChange={handleChange}>
                                    <option value="">Select department</option>
                                    <option value="Employee">App development</option>
                                    <option value="Team Lead">web development</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Salary:</label>
                                <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleChange} />
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-primary btn-block w-100" onClick={handleSubmit}>Add Staff</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStaff;
