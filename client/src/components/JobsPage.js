import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJob } from "../utils/api";
import ErrorAlert from "./ErrorAlert";

export function JobsPage() {
  let navigate = useNavigate();
 
  const initialFormState = {
    position_title: "",
    company_name: "",
    salary: "",
    date: "",
    link: "",
    notes: "",
    type: "",
  };

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ ...initialFormState });

  async function handleSubmit(event) {
    event.preventDefault();
    const ac = new AbortController();
    setError(null);
    try {
      await createJob(
        { ...formData},
        ac.signal
      );
    } catch (error) {
      setError(error);
    }
    return () => ac.abort();
  }

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };


  return (
    <div>
      <div>
        <h1 className="text-center jobHeaderText">Add a Job</h1>
      </div>
      <ErrorAlert error={error} />
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="position_title" className="form-label">
                  Position Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="position_title"
                  onChange={handleChange}
                  value={formData.position_title}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="company_name" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company_name"
                  onChange={handleChange}
                  value={formData.company_name}
                  required
                />
              </div>
              <div className="mb-3 jobLink">
                <label for="salary" className="form-label">
                  Salary
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  onChange={handleChange}
                  value={formData.salary}
                />
              </div>
              <div className="mb-3 jobLink">
                <label for="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  onChange={handleChange}
                  value={formData.date}
                />
              </div>
              <div className="mb-3">
                <label for="link" className="form-label">
                  Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  onChange={handleChange}
                  value={formData.link}
                />
              </div>
              <div className="mb-3">
                <label for="notes" className="form-label">
                  Notes
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  id="notes"
                  onChange={handleChange}
                  value={formData.notes}
                />
              </div>
              <div className="mb-3">
                <label for="type">Type</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Internship</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                  <option>Apprenticeship</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  navigate("/jobcards");
                }}
              >
                Submit
              </button>
            </form>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
