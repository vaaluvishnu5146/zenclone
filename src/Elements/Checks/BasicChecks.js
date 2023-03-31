import React from "react";

export default function BasicChecks({
  id = "",
  value = "",
  label = "",
  onChange = (e) => {},
}) {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        onChange={onChange}
      />
      <label className="form-check-label" for={id}>
        {label}
      </label>
    </div>
  );
}
