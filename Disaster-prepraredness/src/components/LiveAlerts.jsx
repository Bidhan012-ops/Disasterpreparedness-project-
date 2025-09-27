import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { alertaction } from "./Store/Index";

const LiveAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const dispatch = useDispatch();

  // Fetch NASA EONET disasters
  useEffect(() => {
    const fetchDisasters = async () => {
      const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v3/events");
      const data = await res.json();
      setAlerts(data.events);
      dispatch(alertaction.setalert(data.events));

      // Browser notifications
      data.events.forEach((disaster) => {
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification(`Disaster Alert! ${disaster.title}`, {
            body: `Category: ${disaster.categories[0].title}`,
          });
        }
      });
    };

    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    fetchDisasters();
    const interval = setInterval(fetchDisasters, 5 * 60 * 1000); // refresh every 5 mins
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="card mb-4 shadow-lg">
      <div className="card-body">
        <h5 className="card-title">Live Disaster Alerts</h5>
        {alerts.length === 0 ? (
          <div className="alert alert-success mt-3">
            <strong>✅ No Active Alerts</strong>
            <p className="mb-0 small">There are currently no nearby disasters.</p>
          </div>
        ) : (
          alerts.map((alert) => (
            <div key={alert.id} className="alert alert-danger mt-3">
              <strong>⚠ {alert.title}</strong>
              <p className="mb-0 small">Category: {alert.categories[0].title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LiveAlerts;
