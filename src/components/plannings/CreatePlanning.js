import React from "react";
import { useState } from "react";

const CreatePlanning = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, content);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new planning</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Planning content</label>
          <textarea
            name=""
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            cols="30"
            rows="10"
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

export default CreatePlanning;
