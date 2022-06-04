import React from "react";



export function JobsPage () {

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
  <label for="exampleInputText" className="form-label">Job Title</label>
    <input type="text" className="form-control" id="exampleInputText"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Comapany</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 jobLink">
  <label for="exampleInputPassword1" className="form-label">Job Link</label>
    <input type="text" className="form-control" id="exampleInputJobKink"/>
  </div>
  <div className="mb-3 jobLink">
  <label for="exampleInputPassword1" className="form-label">Date Applied</label>
    <input type="date" className="form-control" id="exampleInputJobKink"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Recruiter Email</label>
    <input type="email" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div className="col-2"></div>
</div>
</div>
      </div>
    </div>)
}