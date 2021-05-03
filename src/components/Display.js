import React from "react";
import { DisplayItem } from "./DisplayItem";
import "../App.css";

export default function Display(props) {
  return (
    // * Can use bootstrap accordian in this section
    <div className="display">
      {props.notes.map((note) => {
        return (
          <DisplayItem note={note} key={note.title} onDelete={props.onDelete} />
        );
      })}
    </div>
  );
}
