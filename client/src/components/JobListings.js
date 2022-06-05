/* Look at all jobs and its interactions*/

import React, { useEffect, useState } from "react";
import { listJobs } from "../utils/api";
import ErrorAlert from "./ErrorAlert";
import { JobsPage } from "./JobsPage";

export function JobAndInteractionListing() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(loadJobs);

  function loadJobs() {
    const ac = new AbortController();
    setError(null);
    listJobs(ac.signal).then(setJobs).catch(setError);
    return () => ac.abort();
  }

  return (
    <div className="">
      <h1 className="InteractionHeader">All Jobs</h1>

      {jobs.map((job, index) => {
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-2"></div>
                <div className="card col-8">
                  <div className="card-header title">{job.position_title}</div>

                  <div className="card-body cb">
                    <div key={index}>
                      <h5 className="card-title">
                        Position Title: {job.position_title}
                      </h5>
                      <h5 className="card-title">
                        Company Name: {job.company_name}
                      </h5>
                      <h5 className="card-title">
                        Salary: {job.salary}
                      </h5>
                      <h5 className="type">
                        Type: {job.type}
                      </h5>
                      <h5 className="date">Date: {job.date}</h5>
                      <h5 className="link">Link: {job.link}</h5>
                      <h5 className="notes">
                        Notes: {job.notes}
                      </h5>
                    </div>

                    <p></p>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
