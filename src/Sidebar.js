import React, { useContext } from 'react'
import { LoginContext } from './UseContext'
import { Link } from 'react-router-dom'

function Sidebar() {
    const {useremail,setUserEmail}=useContext(LoginContext)
    let bookReturn=()=>{
        let getbook = window.prompt("Enter ISBN :")
        if (getbook) {
            alert("Book Returned")
        }
    }
  return (
<>
<nav className="sb-sidenav accordion sb-sidenav-light bg-secondary" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to={"/portal/dashboard"}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Library-Data</div>
            <Link
              className="nav-link collapsed"
              to={"/portal/book_list"}
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              Book List
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </Link>

            <div className="sb-sidenav-menu-heading">Student-Data</div>
            <Link className="nav-link" to={"/portal/book_issue"}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Book Issue
            </Link>
            <button onClick={() => {
                bookReturn();
            }} className="nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table"></i>
              </div>
              Book Return 
            </button>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          {useremail.email}
        </div>
      </nav>
</>
  )
}

export default Sidebar