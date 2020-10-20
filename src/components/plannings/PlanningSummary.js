import React from "react";

const PlanningSummary = ({ planning }) => {
  return (
    <div className="card z-depth-0 planning-summary pink lighten-5 section center-align">
      <div className="card-content-grey-text text-darken-3">
        <span className="card-title">{planning.title}</span>
  <p>Posted by {planning.authorFirstName} {planning.authorLastName}</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default PlanningSummary;
