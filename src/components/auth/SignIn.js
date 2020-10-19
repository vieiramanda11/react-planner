import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((previousState) => ({ ...previousState, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-3 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
