import React from "react";
import { Link } from "react-router-dom";
import { House, Book, Bell, FileText, Map, Gear } from "react-bootstrap-icons";

const menuItems = [
  { icon: <House />, label: "Dashboard", path: "/dashboared" },
  { icon: <Book />, label: "Learning Modules", path: "modules" },
  { icon: <FileText />, label: "First Aid & Medical Help", path: "Quizzes" },
  { icon: <Bell />, label: "Emergency Alerts", path: "moniter" },
  { icon: <FileText />, label: "Guidelines & Resources", path: "resources" },
  { icon: <Map />, label: "Evacuation Plans", path: "EvacuationPlans" },
  { icon: <Gear />, label: "Settings", path: "settings" },
];

export default function Sidebar() {
  return (
    <aside className="bg-primary text-white p-3" style={{ width: "250px" }}>
      <h3 className="fw-bold mb-4">DisasterEdu</h3>
      <ul className="nav flex-column">
        {menuItems.map((item, idx) => (
          <li className="nav-item mb-2" key={idx}>
            <Link to={item.path} className="nav-link text-white d-flex align-items-center">
              {item.icon} <span className="ms-2">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}