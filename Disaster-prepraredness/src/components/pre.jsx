import React from "react";
import { useSelector } from "react-redux";

export default function PreparednessScore() {
  const score = useSelector((store) => store.score);

  return (
    <div className="card text-center mb-4">
      <div className="card-body">
        <h5 className="card-title">Preparedness Score</h5>
        <div
          className="position-relative d-inline-block"
          style={{ width: "150px", height: "150px" }}
        >
          <svg width="150" height="150">
            <circle
              cx="75"
              cy="75"
              r="65"
              stroke="#e9ecef"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="75"
              cy="75"
              r="65"
              stroke="#28a745"
              strokeWidth="12"
              fill="none"
              strokeDasharray="408"
              strokeDashoffset={408 - (408 * score) / 100}
              strokeLinecap="round"
            />
          </svg>
          <div className="position-absolute top-50 start-50 translate-middle fw-bold fs-4">
            {score}%
          </div>
        </div>
      </div>
    </div>
  );
}
