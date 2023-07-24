import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className="sidebar d-flex flex-shrink-0 flex-column p-3 text- bg-light min-vh-100">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-primary text-decoration-none">
        <span className="fs-4">Admin Portal</span>
      </Link>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">
            Areabase
          </Link>
        </li>
        <li>
        <Link to="/orders" className="nav-link">
            Orders
          </Link>
        </li>
        <li>
          <Link to="/customers" className="nav-link">
            Customers
          </Link>
        </li>
        <li>
          <Link to="/vendors" className="nav-link">
            Vendors
          </Link>
        </li>
      </ul>
      <hr></hr>
      <div className="user dropdown">
        <Link to="/" className="d-flex text-primary text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown"
          aria-expanded="false">
          <i className="fa-regular fa-user me-2"></i>
          <strong>User</strong>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar