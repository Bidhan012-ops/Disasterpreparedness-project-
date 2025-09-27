import React from "react";

const drills = [
  { event: "Earthquake Drill", date: "March 12", time: "10:00 AM" },
  { event: "Fire Drill", date: "April 5", time: "2:00 PM" },
];

export default function UpcomingDrills() {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Upcoming Drills</h5>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {drills.map((d, i) => (
              <tr key={i}>
                <td>{d.event}</td>
                <td>{d.date}</td>
                <td>{d.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
