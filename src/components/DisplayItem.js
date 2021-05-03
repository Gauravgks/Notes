import React from "react";
import "../App.css";

export const DisplayItem = ({ note, onDelete }) => {
  return (
    <div className = "displayitem">
      <div className="alert alert-success" role="alert">
      <h4>{note.title}</h4>
      <h4>{note.desc}</h4> 
      <button className="btn btn-outline-danger" onClick={() => {onDelete(note)}}>Delete</button>
      </div>
    </div>
  );
};

