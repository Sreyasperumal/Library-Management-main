import React from 'react'
import { Link } from 'react-router-dom';

function Issue_List() {
    let deleteData = () => {
        let confirm = window.confirm("Are you sure want to delete?");
        if (confirm) {
          alert("Deleted!!");
        }
      };
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Book Borrowers List</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Add on and Availability</li>
      </ol>
      <Link
        to={"/portal/book_issue"}
        type="button"
        className="btn btn-secondary me-2 mb-1"
      >
        Back
      </Link>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table me-1"></i>
          Borrowers Table
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#id</th>
                <th scope="col">Student Name</th>
                <th scope="col">Student Id</th>
                <th scope="col">Department</th>
                <th scope="col">Book Title</th>
                <th scope="col">ISBN</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">Return Date</th>
                <th scope="col">Fine</th>
                <th scope="col">Remark</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Ashok Kumar</td>
                <td>2023CS12</td>
                <td>Computer Science</td>
                <td>React JS</td>
                <td>678-876-1234</td>
                <td>2023-7-1</td>
                <td>2023-7-10</td>
                <td>2023-7-7</td>
                <td>5.00</td>
                <td>NIL</td>
                <td>
                  <button
                    onClick={() => {
                      deleteData();
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Tharani</td>
                <td>2023BCOM12</td>
                <td>Economics</td>
                <td>GST Tax</td>
                <td>608-876-1234</td>
                <td>2023-7-1</td>
                <td>2023-7-10</td>
                <td>2023-7-7</td>
                <td>5.00</td>
                <td>NIL</td>
                <td>
                  <button
                    onClick={() => {
                      deleteData();
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Issue_List