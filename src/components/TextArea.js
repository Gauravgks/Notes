import React from "react";

export default function TextArea({value}) {
  return (
    <div className="Container">
        <h3>{value}</h3>
      <div class="input-group mb-3" >
        <input
          type="text"
          class="form-control"
          placeholder="Input Notes"
          aria-label="note value"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="add note"
        >
          ADD NOTE
        </button>
      </div>
    </div>
  );
}
