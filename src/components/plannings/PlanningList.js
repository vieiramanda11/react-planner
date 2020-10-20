import React from "react";
import PlanningSummary from "./PlanningSummary";

const PlanningList = ({ plannings }) => {
  return (
    <div className="planning-list section">
      {plannings &&
        plannings.map((planning) => {
          return <PlanningSummary planning={planning} key={planning.id} />;
        })}
    </div>
  );
};

export default PlanningList;
