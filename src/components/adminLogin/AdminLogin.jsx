import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    
    // Assuming authentication logic here...
    
    // Redirect to /admindashboard after successful login
    navigate('/admindashboard');
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', marginBottom: '20px' }}>
      <div className="row justify-content-center w-100">
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4">Admin Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group p-2">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="form-group p-2">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="d-flex justify-content-center p-2">
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
