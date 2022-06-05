import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

export function InteractionsCards () {

  let navigate = useNavigate();

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
        <h1 className="InteractionHeader">Interaction Listings</h1>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="card col-8">
  <div className="card-header title">
    Interaction Card
  </div>
  <div className="card-body cb">
    {user.map((value,index)=>{
      return (
        <div key={index}>
    <h5 className="card-title">Date</h5>
    <h5 className="card-title">Name</h5>
    <h5 className="card-title">Position</h5>
    <h5 className="card-title">Mode</h5>
    <h5 className="card-title">Summary</h5>
    <button className="btn btn-warning" onClick={()=>{navigate("/editinteractions")}}>Edit</button>
    </div>
      )
})}

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