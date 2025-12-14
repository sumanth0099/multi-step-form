import React from "react";

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="stepper">
      {[0,1,2,3].map((step) => (
        <div key={step} className={step <= currentStep ? "active" : ""}></div>
      ))}
    </div>
  );
};

export default ProgressBar;
