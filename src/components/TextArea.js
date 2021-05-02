import React, { useState } from "react";
import "../App.css";
import "../App.js";
import Display from "./Display";

export default function TextArea() {
  const [title, desc] = useState("");

  return (
    <div classNameName="Container">
      <div className="mb-3 ">
        <label HTMLFor="heading" className="form-label">
          Heading
        </label>
        <input
          type="text"
          className="form-control"
          id="heading"
          placeholder="Heading"
          value={title}
        />
      </div>
      <div className="mb-3">
        <label HTMLFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={desc}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">
        Add Note
      </button>
    </div>
  );
}
