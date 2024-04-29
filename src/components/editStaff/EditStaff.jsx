import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditStaff = () => {
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
    const handleDelete = () => {
        console.log('Staff deleted');
    }

    return (
        <div className="container">
            <h1 className="mt-1 mb-3 text-center">Edit Staff</h1>
            <div className="row">
                <div className="col-md-6 mx-auto">
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
                            <input type="text" className="form-control" name="designation" value={formData.designation} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salary:</label>
                            <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleChange} />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-primary btn-block w-100" onClick={handleSubmit}>Edit Staff Details</button>
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn btn-danger btn-block w-100" onClick={handleDelete}>Delete Staff Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditStaff;
