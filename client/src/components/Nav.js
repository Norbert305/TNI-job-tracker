import React from "react";
import { useNavigate } from "react-router-dom";


export function NavBar () {

    let navigate = useNavigate();

return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={()=>{navigate("/")}}>Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>{navigate("/jobs")}} >Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>{navigate("/interactions")}}>Interactions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>{navigate("/aboutus")}}>About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
)


}