import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
   let formdata=useSelector(store=>store.form);
  return (
    <header className="bg-white shadow-sm p-3 d-flex justify-content-between align-items-center" style={{backgroundColor:"#FDC5F5"}}>
      <nav className="d-flex gap-3 myheader" >
        <Link to="/dashboared" className="text-dark text-decoration-none">Home</Link>
        <Link to="about" className="text-dark text-decoration-none">About</Link>
        <Link to="Contact" className="text-dark text-decoration-none">Contact</Link>
      </nav>
      <span style={{ paddingLeft: "33rem" }}>Username: {formdata.fullName}</span>
      <div className="rounded-circle bg-secondary" style={{ width: "40px", height: "40px" }}>
        <img src="https://twemoji.maxcdn.com/v/latest/72x72/1f642.png" alt="" />
      </div>
    </header>
  );
}
