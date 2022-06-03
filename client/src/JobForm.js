import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { today } from "./utils/date-format";

export default function JobForm() {
    const initialFormData = {
        id: "",
        position: "",
        company_name: "",
        salary: "",
        date: today(),
        link: "",
        notes: "",
        type: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    };

    const handleCancel = () => {
        window.history.go(-1);
    };

    return (
        <form className="w-100 form-group" onSubmit={handleSubmit}>
            <div className="my-2">
                <div className="my-2">
                    <label htmlFor="company_name">Company</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="company_name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="position">Position</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control form-control-lg"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="link">Link</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="link"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        type="text"
                        className="form-control form-control-lg"
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="type">Type</label>
                    <select
                        className="form-control form-control-lg"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="">Choose Type</option>
                        <option value="fulltime">Full-Time</option>
                        <option value="parttime">Part-Time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                        <option value="apprenticeship">Apprenticeship</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="my-2 d-flex ">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="btn btn-secondary mr-2"
                >
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary ml-2">
                    Submit
                </button>
            </div>
        </form>
    );
}
