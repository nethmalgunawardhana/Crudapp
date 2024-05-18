import React from 'react';
import {Link} from "react-router-dom";

 function Header() {
  return (
    <div>
        <React.Fragment>
        
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <div className="container">
      <Link to="/" className="navbar-brand" >Devops Developer </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
          </li>
          
          
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  </React.Fragment>
  </div>
  );
}
export default Header;
