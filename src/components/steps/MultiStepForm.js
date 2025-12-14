import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

import {
  personalInfoSchema,
  addressSchema,
  accountSchema
} from "../../validation/formSchemas";

import PersonalInfoStep from "./PersonalInfoStep";
import AddressStep from "./AddressStep";
import AccountCreationStep from "./AccountCreationStep";
import ReviewStep from "./ReviewStep";

import { useFormPersistence } from "../../hooks/useFormPersistence";

import ProgressBar from "../UI/ProgressBar";
import Button from "../UI/Button";

const steps = ["Personal Info", "Address", "Account Creation", "Review"];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(
      currentStep === 0
        ? personalInfoSchema
        : currentStep === 1
        ? addressSchema
        : currentStep === 2
        ? accountSchema
        : personalInfoSchema
    ),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: 18,
      street: "",
      city: "",
      state: "",
      zip: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { getSavedState, clearSavedState } = useFormPersistence(
    "multiStepForm",
    methods.getValues
  );

  // Load saved data safely
  useEffect(() => {
    const saved = localStorage.getItem("multiStepForm");
    if (saved && saved !== "undefined") {
      try {
        const parsed = JSON.parse(saved);
        methods.reset(parsed);
      } catch (error) {
        console.error("Failed to parse saved form data:", error);
        localStorage.removeItem("multiStepForm");
      }
    }
  }, [methods]);

  useEffect(() => {
    const firstInput = document.querySelector("input");
    firstInput && firstInput.focus();
  }, [currentStep]);

  const nextStep = async () => {
    const valid = await methods.trigger();

    if (!valid) {
      const errors = methods.formState.errors;
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const el = document.querySelector(`[name="${firstErrorField}"]`);
        el && el.focus();
      }
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    clearSavedState();
    alert("Registration Successful!");
  };

  return (
    <FormProvider {...methods}>
      <ProgressBar currentStep={currentStep} />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && <PersonalInfoStep />}
            {currentStep === 1 && <AddressStep />}
            {currentStep === 2 && <AccountCreationStep />}
            {currentStep === 3 && <ReviewStep goToStep={setCurrentStep} />}
          </motion.div>
        </AnimatePresence>

        <div style={{ marginTop: "20px" }}>
          <Button onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </Button>

          {currentStep < steps.length - 1 && (
            <Button onClick={nextStep}>Next</Button>
          )}

          {currentStep === steps.length - 1 && (
            <Button type="submit">Submit</Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
