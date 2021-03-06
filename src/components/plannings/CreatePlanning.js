import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import { createPlanning } from '../../store/actions/planningActions';

const CreatePlanning = ({ createPlanning }) => {
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((previousState) => ({ ...previousState, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPlanning(state);

    setState({
      title: "",
      content: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new planning</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Planning content</label>
          <textarea
            id="content"
            value={state.content}
            onChange={handleChange}
            className="materialize-textarea"
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-3 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlanning: (planning) => dispatch(createPlanning(planning))
  }
}

export default connect(null, mapDispatchToProps)(CreatePlanning);
