import React, { useContext } from 'react'
import { LoginContext } from './UseContext';
import { Link } from 'react-router-dom';

function Topbar() {
    const {useremail,setUserEmail} = useContext(LoginContext)
      return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-secondary">
          <a className="navbar-brand ps-3" href="index.html">
            Library Admin Panel
          </a>
    
          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            href="#!"
          >
            <i className="fas fa-bars"></i>
          </button>
    
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              <Link
                to={"/"}
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
              >
                Logout
              </Link>
            </div>
          </form>
    
          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small me-3">
                  {useremail.email}
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="https://picsum.photos/id/5/50/50"
                />
              </a>
            </li>
          </ul>
        </nav>
      );
    }

export default Topbar;