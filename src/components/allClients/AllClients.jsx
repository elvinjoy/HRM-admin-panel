import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const AllClients = () => {
    
const clients = [
    { id: 1, name: 'Client 1', number: '1234567890', address: '123 Main St, City', businessName: 'ABC Company', workDescription: 'Web Development', advance: '$500', totalPayment: '$2000', referral: 'Referral 1' },
    { id: 2, name: 'Client 2', number: '2345678901', address: '456 Elm St, Town', businessName: 'XYZ Corporation', workDescription: 'Graphic Design', advance: '$300', totalPayment: '$1500', referral: 'Referral 2' },
    { id: 3, name: 'Client 3', number: '3456789012', address: '789 Oak St, Village', businessName: 'PQR Ltd', workDescription: 'Content Writing', advance: '$400', totalPayment: '$1800', referral: 'Referral 3' },
    { id: 4, name: 'Client 4', number: '4567890123', address: '101 Pine St, Town', businessName: 'LMN Enterprises', workDescription: 'SEO Optimization', advance: '$600', totalPayment: '$2500', referral: 'Referral 4' },
    { id: 5, name: 'Client 5', number: '5678901234', address: '202 Oak St, City', businessName: 'QRS Inc', workDescription: 'Mobile App Development', advance: '$700', totalPayment: '$3000', referral: 'Referral 5' },
    { id: 6, name: 'Client 6', number: '6789012345', address: '303 Elm St, Village', businessName: 'TUV Corporation', workDescription: 'Social Media Marketing', advance: '$200', totalPayment: '$1200', referral: 'Referral 6' },
    { id: 7, name: 'Client 7', number: '7890123456', address: '404 Maple St, City', businessName: 'XYZ Ltd', workDescription: 'UI/UX Design', advance: '$400', totalPayment: '$1800', referral: 'Referral 7' },
    { id: 8, name: 'Client 8', number: '8901234567', address: '505 Cedar St, Town', businessName: 'JKL Inc', workDescription: 'E-commerce Website Development', advance: '$800', totalPayment: '$3500', referral: 'Referral 8' },
    { id: 9, name: 'Client 9', number: '9012345678', address: '606 Oak St, Village', businessName: 'OPQ Enterprises', workDescription: 'Copywriting', advance: '$300', totalPayment: '$1500', referral: 'Referral 9' },
    { id: 10, name: 'Client 10', number: '0123456789', address: '707 Elm St, City', businessName: 'RST Corporation', workDescription: 'Logo Design', advance: '$200', totalPayment: '$1000', referral: 'Referral 10' },
    { id: 11, name: 'Client 11', number: '1234567890', address: '808 Pine St, Town', businessName: 'MNO Solutions', workDescription: 'Mobile App UI/UX Design', advance: '$400', totalPayment: '$2200', referral: 'Referral 11' },
    { id: 12, name: 'Client 12', number: '2345678901', address: '909 Maple St, City', businessName: 'EFG Enterprises', workDescription: 'Digital Marketing', advance: '$600', totalPayment: '$2800', referral: 'Referral 12' },
    { id: 13, name: 'Client 13', number: '3456789012', address: '1010 Oak St, Village', businessName: 'HIJ Corporation', workDescription: 'SEO Consultancy', advance: '$300', totalPayment: '$1600', referral: 'Referral 13' },
    { id: 14, name: 'Client 14', number: '4567890123', address: '1111 Elm St, City', businessName: 'STU Ltd', workDescription: 'Content Marketing', advance: '$500', totalPayment: '$2400', referral: 'Referral 14' },
    { id: 15, name: 'Client 15', number: '5678901234', address: '1212 Cedar St, Town', businessName: 'VWX Enterprises', workDescription: 'Social Media Advertising', advance: '$700', totalPayment: '$3200', referral: 'Referral 15' },];


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="card p-4">
                        <h3 className="text-center mb-4">Select the Client you want to edit</h3>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {clients.map(client => (
                                <div key={client.id} className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="border p-3">
                                                <h5 className="card-title">{client.name}</h5>
                                                <p className="card-text">Number: {client.number}</p>
                                                <p className="card-text">Address: {client.address}</p>
                                                <p className="card-text">Business Name: {client.businessName}</p>
                                                <p className="card-text">Work Description: {client.workDescription}</p>
                                                <p className="card-text">Advance: {client.advance}</p>
                                                <p className="card-text">Total Payment: {client.totalPayment}</p>
                                                <p className="card-text">Referral: {client.referral}</p>
                                            </div>
                                            <Link to="/editclients" className="btn btn-primary mt-3">Edit Details</Link>
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

export default AllClients;
