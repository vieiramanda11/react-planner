import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const PlanningDetail = ({ planning }) => {
  if (planning) {
    return (
      <div className="container section planning-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{planning.title}</span>
            <p>{planning.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by {planning.authorFirstName} {planning.authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const plannings = state.firestore.data.plannings;
  const planning = plannings ? plannings[id] : null;
  return {
    planning: planning,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "plannings",
    },
  ])
)(PlanningDetail);
