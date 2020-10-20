import React from "react";
import PlanningList from "../plannings/PlanningList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

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
  console.log(state);
  return {
    plannings: state.firestore.ordered.plannings
  };
};

export default compose(
  firestoreConnect([
    {
      collection: "plannings",
    },
  ]),
  connect(mapStateToProps)
)(Dashboard);
