import React, { useState } from "react";
import "../App.css";
import "../App.js";

export default function TextArea(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const submit = (e) =>{
      e.preventDefault();
      if(!title || !desc){
        alert("Insert Title or Description");
      }
      else{
      props.addNote(title,desc);
      setTitle("");
      setDesc("");
      }
  }

  return (
    <div className="Container">
      <form onSubmit = {submit}>
        <div className="mb-3 ">
          <label htmlFor="heading" className="form-label">
            Heading
          </label>
          <input type="text" className="form-control" id="heading" placeholder="Heading"
            onChange = {(e) => {setTitle(e.target.value)}} value={title} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea className="form-control" id="description" rows="3"
            onChange = {(e) => {setDesc(e.target.value)}} value={desc}></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Add Note
        </button>
      </form>
    </div>
  );
}
