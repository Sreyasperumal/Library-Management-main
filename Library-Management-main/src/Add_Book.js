import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

function Add_Book() {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      category: "",
      isbn: "",
      publisher: "",
      year: "",
    },

    validate: (values) => {
      let error = {};

      if (!values.title) {
        error.title = "Please enter Book Title/Name";
      } else if (values.title.length < 3 || values.title.length > 30) {
        error.title = "Title Should be 3 to 30 Characters only";
      }

      if (!values.author) {
        error.author = "Please enter Book Author Name";
      } else if (values.author.length < 3 || values.author.length > 15) {
        error.author = "Name Should be 3 to 15 Characters only";
      }

      if (!values.category) {
        error.category = "*Required";
      }

      if (!values.isbn) {
        error.isbn = "Please enter Book ISBN";
      } else if (!/^\d{3}-\d{3}-\d{4}$/i.test(values.isbn)) {
        error.isbn = "ISBN must be given format";
      }

      if (!values.publisher) {
        error.publisher = "Please enter Publisher Name";
      } else if (values.publisher.length < 3 || values.publisher.length > 15) {
        error.publisher = "Publisher Should be 3 to 15 Characters only";
      }

      if(!values.year) {
        error.year = "*Required"
      }else if (values.year.toString().length !== 4){
        error.year = "Please enter Year Only"
      }
      return error;
    },

    onSubmit: async (values) => {
      try {
        let bookAdd = await axios.post(
          "https://6384c57d3fa7acb14f0017a5.mockapi.io/books",
          values
        );
        alert("Added Successfully!!");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Add Book Details</h1>
      <form
        className="row g-3 m-4 border border-3 border-success rounded"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Book Title<span style={{ color: "red" }}>*</span>
          </label>
          <input
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            type="text"
            className={`form-control ${formik.errors.title ? "error-box" : ""} ${
              formik.touched.title && !formik.errors.title ? "success-box" : ""
            }`}
            id="inputEmail4"
          />
          {formik.errors.title ? (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          ) : null}
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Author<span style={{ color: "red" }}>*</span>
          </label>
          <input
            name="author"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
            type="text"
            className={`form-control ${formik.touched.author && formik.errors.author ? "error-box" : ""} ${
              formik.touched.author && !formik.errors.author
                ? "success-box"
                : ""
            }`}
            id="inputPassword4"
          />
          {formik.touched.author && formik.errors.author ? (
            <span style={{ color: "red" }}>{formik.errors.author}</span>
          ) : null}
        </div>
        <div className="col-md-6">
          <label for="inputAddress" className="form-label">
            ISBN<span style={{ color: "red" }}>*</span>
          </label>
          <input
            name="isbn"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.isbn}
            type="text"
            className={`form-control ${formik.touched.isbn && formik.errors.isbn ? "error-box" : ""} ${
                formik.touched.isbn && !formik.errors.isbn
                  ? "success-box"
                  : ""
              }`}
            id="inputAddress"
            placeholder="123-456-7890"
          />
          {formik.touched.isbn && formik.errors.isbn ? (
            <span style={{ color: "red" }}>{formik.errors.isbn}</span>
          ) : null}
        </div>
        <div className="col-md-6">
          <label for="inputAddress2" className="form-label">
            Publisher<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="publisher"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.publisher}
            className={`form-control ${formik.touched.publisher && formik.errors.publisher ? "error-box" : ""} ${
                formik.touched.publisher && !formik.errors.publisher
                  ? "success-box"
                  : ""
              }`}
            id="inputAddress2"
            placeholder="Best India, Star"
          />
          {formik.touched.publisher && formik.errors.publisher ? (
            <span style={{ color: "red" }}>{formik.errors.publisher}</span>
          ) : null}
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Category<span style={{ color: "red" }}>*</span>
          </label>
          <select
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            id="inputState"
            className="form-select"
          >
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
          {formik.errors.category ? (
            <span style={{ color: "red" }}>{formik.errors.category}</span>
          ) : null}
        </div>
        <div className="col-md-4">
          <label for="inputAddress2" className="form-label">
            Year<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            name="year"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
            className={`form-control ${formik.touched.year && formik.errors.year ? "error-box" : ""} ${
                formik.touched.year && !formik.errors.year
                  ? "success-box"
                  : ""
              }`}
            id="inputAddress2"
            placeholder="2022"
          />
          {formik.touched.year && formik.errors.year ? (
            <span style={{ color: "red" }}>{formik.errors.year}</span>
          ) : null}
        </div>
        <div className="col-12">
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
      </form>
    </div>
  );
}

export default Add_Book;