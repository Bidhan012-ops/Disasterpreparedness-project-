import { useState, useEffect } from "react";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("/alerts.json")
      .then((res) => res.json())
      .then((data) => setAlerts(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Emergency Alerts</h2>
      {alerts.map((a) => (
        <div
          key={a.id}
          className={`p-3 mb-2 rounded ${
            a.level === "danger" ? "bg-red-200" : "bg-yellow-200"
          }`}
        >
          <strong>{a.type}:</strong> {a.message}
        </div>
      ))}
    </div>
  );
}
