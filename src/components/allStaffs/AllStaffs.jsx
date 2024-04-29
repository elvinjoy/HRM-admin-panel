import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const AllStaffs = () => {
    // Dummy data for staffs
    const staffs = [
        { id: 1, name: 'John Doe', email: 'john@example.com', designation: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', designation: 'Product Manager' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', designation: 'HR Manager' },
        { id: 4, name: 'Bob Johnson', email: 'bob@example.com', designation: 'UI/UX Designer' },
        { id: 5, name: 'Emma Watson', email: 'emma@example.com', designation: 'Marketing Specialist' },
        { id: 6, name: 'Michael Brown', email: 'michael@example.com', designation: 'Frontend Developer' },
        { id: 7, name: 'Sarah Wilson', email: 'sarah@example.com', designation: 'Financial Analyst' },
        { id: 8, name: 'David Lee', email: 'david@example.com', designation: 'Project Manager' },
        { id: 9, name: 'Olivia Taylor', email: 'olivia@example.com', designation: 'HR Assistant' },
        { id: 10, name: 'William Clark', email: 'william@example.com', designation: 'Backend Developer' },
        { id: 11, name: 'Emily Martinez', email: 'emily@example.com', designation: 'Content Writer' },
        { id: 12, name: 'James Anderson', email: 'james@example.com', designation: 'Data Analyst' },
        { id: 13, name: 'Sophia Brown', email: 'sophia@example.com', designation: 'Customer Support Specialist' },
        { id: 14, name: 'Daniel White', email: 'daniel@example.com', designation: 'Graphic Designer' },
        { id: 15, name: 'Mia Garcia', email: 'mia@example.com', designation: 'Sales Manager' },
        { id: 16, name: 'Ethan Wilson', email: 'ethan@example.com', designation: 'System Administrator' },
        { id: 17, name: 'Isabella Miller', email: 'isabella@example.com', designation: 'Business Analyst' },
        { id: 18, name: 'Noah Harris', email: 'noah@example.com', designation: 'Quality Assurance Engineer' },
        { id: 19, name: 'Ava Martinez', email: 'ava@example.com', designation: 'Technical Writer' },
        { id: 20, name: 'Alexander Taylor', email: 'alexander@example.com', designation: 'Network Engineer' },
        { id: 20, name: 'prime', email: 'prime@example.com', designation: 'web developer' },
    ];

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="card p-4">
                        <h3 className="text-center mb-4">Select the Staff you want to edit</h3>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {staffs.map(staff => (
                                <div key={staff.id} className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="border p-3">
                                                <h5 className="card-title">{staff.name}</h5>
                                                <p className="card-text">Email: {staff.email}</p>
                                                <p className="card-text">Designation: {staff.designation}</p>
                                            </div>
                                            <Link to="/editstaff" className="btn btn-primary mt-3">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllStaffs;
