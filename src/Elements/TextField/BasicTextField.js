import React from "react";

export default function BasicTextField({
  id = "",
  label = "",
  type = "",
  placeholder = "",
  onChange = (e) => {},
  onBlur = (e) => {},
  value = "",
  error = "",
  touched = false,
}) {
  return (
    <div class="mb-3">
      <label for={id} class="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${
          touched && error ? (error ? "is-invalid" : "is-valid") : null
        }`}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <div
        className={`${
          touched && error
            ? error
              ? "invalid-feedback"
              : "valid-feedback"
            : null
        }`}
      >
        {error}
      </div>
    </div>
  );
}
