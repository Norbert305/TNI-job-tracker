import React from "react"

export function InteractionsPage () {

return (
    <div className="text-center">
        <h1 className="InteractionHeader">Interactions Page</h1>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="card col-8">
  <div className="card-header">
    Job Card
  </div>
  <div className="card-body">
    <h5 className="card-title">Job Title</h5>
    <h5 className="card-title">Comapny Name</h5>
    <h5 className="card-title">Date Applied</h5>
    <h5 className="card-title">Link</h5>
    <h5 className="card-title">Recruiter Email</h5>
    <button className="btn btn-warning">Edit</button>
    <p></p>
    <button className="btn btn-danger">Delete</button>
  </div>

</div>
                    <div className="col-2"></div>

                </div>

            </div>
        </div>
    </div>
)



}