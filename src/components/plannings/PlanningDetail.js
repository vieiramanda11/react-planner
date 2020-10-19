import React from "react";

const PlanningDetail = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section planning-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Something here...</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Amanda Vieira</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default PlanningDetail;
