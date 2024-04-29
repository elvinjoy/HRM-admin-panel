import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllDepartments = () => {
    // Dummy data for departments
    const departments = [
        { id: 1, name: 'Department 1' },
        { id: 2, name: 'Department 2' },
        { id: 3, name: 'Department 3' },
        { id: 4, name: 'Department 4' },
        { id: 5, name: 'Department 5' },
        { id: 6, name: 'Department 6' },
        { id: 7, name: 'Department 7' },
        { id: 8, name: 'Department 8' },
        { id: 9, name: 'Department 9' },
        { id: 10, name: 'Department 10' },
    ];

    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <h2 className="text-center">All Departments</h2>
                    <ul className="list-group">
                        {departments.map(department => (
                            <li key={department.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {department.name}
                                <Link to={`/editdepartment`} className="btn btn-primary">Edit Department</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllDepartments;
