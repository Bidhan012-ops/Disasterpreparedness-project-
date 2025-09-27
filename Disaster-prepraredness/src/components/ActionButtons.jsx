import React from "react";
import { GrAnnounce } from "react-icons/gr";
import { FaUserShield } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
export default function ActionButtons() {
  return (
    <div className="row mb-4 ">
      <div className="col-md-4">
        <div className="card text-white bg-success mb-3 text-center p-3 bbutton">
          <FaUserShield/>
          <h6>Learn Disaster Safety</h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-danger mb-3 text-center p-3 bbutton">
          <GrAnnounce />
          <h6>Real-Time Alerts</h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-warning mb-3 text-center p-3 bbutton">
          <FaBriefcaseMedical/>
          <h6>Emergency Contacts</h6>
        </div>
      </div>
    </div>
  );
}
