import { useEffect } from "react";

export const useFormPersistence = (key, getValues) => {
  useEffect(() => {
    const handleStorage = () => {
      try {
        const values = getValues();
        if (values) {
          localStorage.setItem(key, JSON.stringify(values));
        }
      } catch (error) {
        console.error("Failed to save form state:", error);
      }
    };

    const interval = setInterval(handleStorage, 500); 
    return () => clearInterval(interval);
  }, [key, getValues]);

  const getSavedState = () => {
    const saved = localStorage.getItem(key);
    if (saved && saved !== "undefined") {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error("Failed to parse saved form data:", error);
        localStorage.removeItem(key);
      }
    }
    return null;
  };

  const clearSavedState = () => {
    localStorage.removeItem(key);
  };

  return { getSavedState, clearSavedState };
};
