import React from "react";
import PlanningSummary from "./PlanningSummary";
import { Link } from "react-router-dom";

const PlanningList = ({ plannings }) => {
  return (
    <div className="planning-list section">
      {plannings &&
        plannings.map((planning) => {
          return (
            <Link to={`/planning/${planning.id}`}>
              <PlanningSummary planning={planning} key={planning.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default PlanningList;
