import React from "react";
import PlanningSummary from "./PlanningSummary";
import { Link } from 'react-router-dom';

const PlanningList = () => {
  return (
    <div className="planning-list section">
      <Link>
        <PlanningSummary />
      </Link>
      <Link>
        <PlanningSummary />
      </Link>
    </div>
  );
};

export default PlanningList;
