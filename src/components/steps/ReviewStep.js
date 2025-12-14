import React from "react";
import { useFormContext } from "react-hook-form";
import Button from "../UI/Button";
import { motion } from "framer-motion";

const ReviewStep = ({ goToStep }) => {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Review Your Information</h2>

      <section style={{ marginBottom: "20px" }}>
        <h3>
          Personal Information{" "}
          <Button onClick={() => goToStep(0)} style={{ marginLeft: "10px" }}>
            Edit
          </Button>
        </h3>
        <p>First Name: {values.firstName}</p>
        <p>Last Name: {values.lastName}</p>
        <p>Email: {values.email}</p>
        <p>Phone: {values.phone}</p>
        <p>Age: {values.age}</p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3>
          Address{" "}
          <Button onClick={() => goToStep(1)} style={{ marginLeft: "10px" }}>
            Edit
          </Button>
        </h3>
        <p>Street: {values.street}</p>
        <p>City: {values.city}</p>
        <p>State: {values.state}</p>
        <p>ZIP: {values.zip}</p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3>
          Account Creation{" "}
          <Button onClick={() => goToStep(2)} style={{ marginLeft: "10px" }}>
            Edit
          </Button>
        </h3>
        <p>Username: {values.username}</p>
      </section>
    </motion.div>
  );
};

export default ReviewStep;
