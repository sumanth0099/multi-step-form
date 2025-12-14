import React from "react";

const Input = React.forwardRef(
  ({ label, error, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div style={{ marginBottom: "12px" }}>
        <label htmlFor={inputId}>{label}</label>
        <input
          id={inputId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span
            id={`${inputId}-error`}
            role="alert"
            style={{ color: "red" }}
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
