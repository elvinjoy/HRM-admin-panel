import React, { useState } from 'react';

const AddClients = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        address: '',
        businessName: '',
        workDescription: '',
        advance: '',
        totalPayment: '',
        referral: ''
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
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="container">
            <h1 className="mt-4 mb-4 text-center">Add Clients Page</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Number:</label>
                                <input type="text" className="form-control" name="number" value={formData.number} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address:</label>
                                <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Business Name:</label>
                                <input type="text" className="form-control" name="businessName" value={formData.businessName} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Work Description:</label>
                                <textarea className="form-control" name="workDescription" value={formData.workDescription} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Advance:</label>
                                <input type="text" className="form-control" name="advance" value={formData.advance} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Total Payment:</label>
                                <input type="text" className="form-control" name="totalPayment" value={formData.totalPayment} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Referral From Whom:</label>
                                <input type="text" className="form-control" name="referral" value={formData.referral} onChange={handleChange} />
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-primary btn-block w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClients;
