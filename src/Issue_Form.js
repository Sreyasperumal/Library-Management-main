import React from "react";
import { Link } from "react-router-dom";

function Issue_Form() {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Book Issue Form</h1>
      <form className="row g-3 m-4 border border-3 border-success rounded">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Student Name<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputEmail4" className="form-label">
            Student Id No.<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputState" className="form-label">
            Department<span style={{ color: "red" }}>*</span>
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>Computer Science</option>
            <option>Maths</option>
            <option>Economics</option>
            <option>Political Science</option>
            <option>Electrical</option>
            <option>Mechanical</option>
            <option>Electronics</option>
            <option>General/Others</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Book Title<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            ISBN<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="123-456-7890"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputAddress2" className="form-label">
            Issue Date<span style={{ color: "red" }}>*</span>
          </label>
          <input type="date" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputAddress2" className="form-label">
            Due Date<span style={{ color: "red" }}>*</span>
          </label>
          <input type="date" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputAddress2" className="form-label">
            Return Date<span style={{ color: "red" }}>*</span>
          </label>
          <input type="date" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputAddress2" className="form-label">
            Fine(if any) Rs:
          </label>
          <input type="number" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputEmail4" className="form-label">
            Note
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-8">
          <Link
            to={"/portal/book_list"}
            type="button"
            className="btn btn-secondary me-2 mb-1"
          >
            Back
          </Link>
          <button type="submit" className="btn btn-primary mb-1">
            Add
          </button>
        </div>

        <div className="col-md-4 text-end">
          <Link to={"/portal/issue_List"} type="button" className="btn btn-info mb-1">
            Issue List
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Issue_Form;