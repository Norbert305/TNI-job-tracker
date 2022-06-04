import React from "react";
import { useNavigate } from "react-router-dom";


export function JobsPage () {

  let navigate = useNavigate();

    return (<div>
      <div>
      <h1 className="text-center jobHeaderText">Jobs Page</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
          <form>
  <div class="mb-3">
  <label for="exampleInputText" className="form-label">Position Title</label>
    <input type="text" className="form-control" id="exampleInputText"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Comapany Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 jobLink">
  <label for="exampleInputPassword1" className="form-label">Salary</label>
    <input type="text" className="form-control" id="exampleInputJobKink"/>
  </div>
  <div className="mb-3 jobLink">
  <label for="exampleInputPassword1" className="form-label">Date</label>
    <input type="date" className="form-control" id="exampleInputJobKink"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Link</label>
    <input type="text" className="form-control" id="exampleInputLink"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Notes</label>
    <textarea className="form-control" id="exampleInputLink" rows="3"/>
  </div>
  <div className="mb-3">
  <label for="exampleFormControlSelect1">Type</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Internship</option>
      <option>Full-Time</option>
      <option>Part-Time</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary" onClick={()=>{navigate("/jobcards")}}>Submit</button>
</form>
<div className="col-2"></div>
</div>
</div>
      </div>
    </div>)
}