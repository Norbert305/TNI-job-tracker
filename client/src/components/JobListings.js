import React from "react"


export function JobAndInteractionListing () {

  // const initialFormState = {
  //   date: "",
  //   name: "",
  //   position: "",
  //   mode: "",
  //   summary: "",
  // };

  const [user, setUser] = useState([]);
  // const [error, setError] = useState(null);
  // const [formData, setFormData] = useState({ ...initialFormState });

return (
    <div className="">
        <h1 className="InteractionHeader">All Jobs</h1>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="card col-8">
  <div className="card-header title">
    Your Card
  </div>
  <div className="card-body cb">
  {user.map((value,index)=>{
      return (
          <div key={index}>
  <h5 className="card-title">Position Title</h5>
    <h5 className="card-title">Comapny Name</h5>
    <h5 className="card-title">Salary</h5>
    <h5 className="card-title">Date</h5>
    <h5 className="card-title">Link</h5>
    <h5 className="card-title">Notes</h5>
    <h3>Interactions</h3>
    <label for="exampleFormControlSelect1">Interviewed</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Yes</option>
      <option>No</option>
    </select>
    </div>
      )
    })}
    <p></p>
  </div>

</div>
                    <div className="col-2"></div>

                </div>

            </div>
        </div>
    </div>
)



}