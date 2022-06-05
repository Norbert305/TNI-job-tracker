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
      await createJob({ ...formData, salary: Number(formData.salary) }, ac.signal);
      navigate("/jobcards");
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
                  name="position_title"
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
                  name="company_name"
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
                  name="salary"
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
                  name="date"
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
                  name="link"
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
                  name="notes"
                  onChange={handleChange}
                  value={formData.notes}
                />
              </div>
              <div className="mb-3">
                <label for="type">Type</label>
                <select
                  className="form-control"
                  id="type"
                  name="type"
                  onChange={handleChange}
                  value={formData.type}
                >
                  <option value="">-- Select an Option --</option>
                  <option value="Internship">Internship</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Apprenticeship">Apprenticeship</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
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
