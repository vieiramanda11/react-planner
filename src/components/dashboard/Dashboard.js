import React from "react";
import PlanningList from "../plannings/PlanningList";
import Notifications from "./Notifications";
import { connect } from "react-redux";

const Dashboard = ({ plannings }) => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <PlanningList plannings={plannings} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plannings: state.planning.plannings,
  };
};

export default connect(mapStateToProps)(Dashboard);
