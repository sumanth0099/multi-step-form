import './styles.css';
import React from "react";
import MultiStepForm from "./components/steps/MultiStepForm";

function App() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Multi-Step Registration Form</h1>
      <MultiStepForm />
    </div>
  );
}

export default App;
