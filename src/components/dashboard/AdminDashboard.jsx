import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import nike from '../../assets/nike-min.jpg';

const AdminDashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarBtn = document.querySelector(".sidebarBtn");

    const handleSidebarToggle = () => {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };

    sidebarBtn.addEventListener("click", handleSidebarToggle);

    // Cleanup function to remove event listener
    return () => {
      sidebarBtn.removeEventListener("click", handleSidebarToggle);
    };
  }, []);

  return (
    <>
      <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <div className="logo-details">
          <i className="bx bxs-business"></i>
          <span className="logo_name">HRM</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/admindashboard" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/addstaff">
              <i className='bx bxs-user-plus'></i>
              <span className="links_name">Add Staff</span>
            </Link>
          </li>
          <li>
            <Link to="/allstaffs">
              <i class='bx bx-edit-alt'></i>
              <span className="links_name">Edit / Delete Staff</span>
            </Link>
          </li>
          <li>
            <Link to="/addclients">
              <i class='bx bx-user-plus'></i>
              <span className="links_name">add clients</span>
            </Link>
          </li>
          <li>
            <Link to="/allclients">
              <i class='bx bx-edit' ></i>
              <span className="links_name">edit clients</span>
            </Link>
          </li>
          <li>
            <Link to="adddepartment">
              <i class='bx bx-border-outer'></i>
              <span className="links_name">add Department</span>
            </Link>
          </li>
          <li>
            <Link to="/editdepartment">
              <i class='bx bx-message-square-edit'></i>
              <span className="links_name">edit department</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i class='bx bx-bar-chart-square'></i>
              <span className="links_name">Work Status</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </Link>
          </li>
          <li className="log_out">
            <Link to="#">
              <i className="bx bx-log-out"></i>
              <span className="links_name">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Admin Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search"></i>
          </div>
          <div className="profile-details">
            <img src="images/profile.jpg" alt="" />
            <span className="admin_name">Prem Shahi</span>
            <i className="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <Link to="/addstaff">
                <div className="right-side">
                  <div className="box-topic">Add Staffs</div>
                  <div className="number">40,876</div>
                  <div className="indicator">
                    <i class='bx bxs-user-plus'></i>
                    <span className="text">Up from yesterday</span>
                  </div>
                </div>
              </Link>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <Link to="/allstaffs">
                <div className="right-side">
                  <div className="box-topic">Edit Staff</div>
                  <div className="number">38,876</div>
                  <div className="indicator">
                    <i className="bx bx-up-arrow-alt"></i>
                    <span className="text">Up from yesterday</span>
                  </div>
                </div>
              </Link>
              <i className="bx bxs-cart-add cart two"></i>
            </div>
            <div className="box">
              <Link to="/addclients">
                <div className="right-side">
                  <div className="box-topic">Add clients</div>
                  <div className="number">$12,876</div>
                  <div className="indicator">
                    <i className="bx bx-up-arrow-alt"></i>
                    <span className="text">Up from yesterday</span>
                  </div>
                </div>
              </Link>
              <i className="bx bx-cart cart three"></i>
            </div>
            <div className="box">
              <Link to="/adddepartment">
                <div className="right-side">
                  <div className="box-topic">Add Department</div>
                  <div className="number">11,086</div>
                  <div className="indicator">
                    <i className="bx bx-down-arrow-alt down"></i>
                    <span className="text">Down From Today</span>
                  </div>
                </div>
              </Link>
              <i class='bx bx-bar-chart-square'></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Work Status</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date</li>
                  <li><Link to="#">02 Jan 2021 </Link></li>
                  <li><Link to="#">02 Jan 2021 </Link></li>
                  <li><Link to="#">02 Jan 2021 </Link></li>
                  <li><Link to="#">02 Jan 2021 </Link></li>
                  <li><Link to="#">02 Jan 2021 </Link></li>
                  <li><Link to="#">02 Jan 2021 </Link></li>
                  <li><Link to="#">02 Jan 2021 </Link></li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                  <li><Link to="#">Alex Doe </Link></li>
                  <li><Link to="#">David Mart </Link></li>
                  <li><Link to="#">Roe Parter </Link></li>
                  <li><Link to="#">Diana Penty </Link></li>
                  <li><Link to="#">Martin Paw </Link></li>
                  <li><Link to="#">Doe Alex </Link></li>
                  <li><Link to="#">Aiana Lexa </Link></li>
                  <li><Link to="#">Rexel Mags </Link></li>
                  <li><Link to="#">Tiana Loths </Link></li>
                </ul>
                <ul className="details">
                  <li className="topic">Sales</li>
                  <li><Link to="#">Delivered </Link></li>
                  <li><Link to="#">Pending </Link></li>
                  <li><Link to="#">Returned </Link></li>
                  <li><Link to="#">Delivered </Link></li>
                  <li><Link to="#">Pending </Link></li>
                  <li><Link to="#">Returned </Link></li>
                  <li><Link to="#">Delivered </Link></li>
                  <li><Link to="#">Pending </Link></li>
                  <li><Link to="#">Delivered </Link></li>
                </ul>
                <ul className="details">
                  <li className="topic">Total</li>
                  <li><Link to="#">$204.98 </Link></li>
                  <li><Link to="#">$24.55 </Link></li>
                  <li><Link to="#">$25.88 </Link></li>
                  <li><Link to="#">$170.66 </Link></li>
                  <li><Link to="#">$56.56 </Link></li>
                  <li><Link to="#">$44.95 </Link></li>
                  <li><Link to="#">$67.33 </Link></li>
                  <li><Link to="#">$23.53 </Link></li>
                  <li><Link to="#">$46.52 </Link></li>
                </ul>
              </div>
              <div className="button">
                <Link to="#">See All </Link>
              </div>
            </div>
            <div className="top-sales box">
              <div className="title">Clients</div>
              <ul className="top-sales-details">
                <li>
                  <Link to="#">
                    <img src={nike} alt="" />
                    <span className="product">Vuitton Sunglasses</span>
                  </Link>
                  <span className="price">$1107</span>
                </li>
                <li>
                  <Link to="#">
                    <img src={nike} alt="" />
                    <span className="product">Hourglass Jeans </span>
                  </Link>
                  <span className="price">$1567</span>
                </li>
                <li>
                  <Link to="#">
                    <img src={nike} alt="" />
                    <span className="product">Nike Sport Shoe</span>
                  </Link>
                  <span className="price">$1234</span>
                </li>
                <li>
                  <Link to="#">
                    <img src={nike} alt="" />
                    <span className="product">Hermes Silk Scarves.</span>
                  </Link>
                  <span className="price">$2312</span>
                </li>
                <li>
                  <Link to="#">
                    <img src={nike} alt="" />
                    <span className="product">Succi Ladies Bag</span>
                  </Link>
                  <span className="price">$1456</span>
                </li>
                <li>
                  <Link to="#">
                    <img src={nike} alt="" />
                    <span className="product">Gucci Womens's Bags</span>
                  </Link>
                  <span className="price">$2345</span>
                </li>

                <li>
                  <Link to="#">
                    <img src={nike} alt="" />
                    <span className="product">Addidas Running Shoe</span>
                  </Link>
                  <span className="price">$2345</span>
                </li>
                <li>
                  <Link to="#">
                    <img src={nike} alt="" />
                    <span className="product">Bilack Wear's Shirt</span>
                  </Link>
                  <span className="price">$1245</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
