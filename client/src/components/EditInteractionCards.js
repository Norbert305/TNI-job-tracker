import React from "react"
import { useNavigate } from "react-router-dom";

export function EditInteractionsPage () {

    let navigate = useNavigate();

return (
    <div>
    <div>
    <h1 className="text-center jobHeaderText">Edit Interaction Card</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <form>
<div class="mb-3">
<label for="exampleInputText" className="form-label">Date</label>
  <input type="date" className="form-control" id="exampleInputText"/>
</div>
<div className="mb-3 jobLink">
<label for="exampleInputName" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleInputJobKink"/>
</div>
<div className="mb-3 jobLink">
<label for="exampleInputPosition" className="form-label">Position</label>
  <input type="text" className="form-control" id="exampleInputJobKink"/>
</div>
<div className="mb-3 jobLink">
<label for="exampleInputPassword1" className="form-label">Mode</label>
  <input type="text" className="form-control" id="exampleInputJobKink"/>
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Summary</label>
  <input type="text" className="form-control" id="exampleInputPassword1"/>
</div>
<button type="submit" className="btn btn-primary" onClick={()=>{navigate("/interactioncards")}}>Save</button>
</form>
<div className="col-2"></div>
</div>
</div>
    </div>
  </div>
)



}