import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "../UI/Input";

const AddressStep = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div>
      <Input
        label="Street"
        {...register("street")}
        error={errors.street?.message}
      />

      <Input
        label="City"
        {...register("city")}
        error={errors.city?.message}
      />

      <Input
        label="State"
        {...register("state")}
        error={errors.state?.message}
      />

      <Input
        label="ZIP"
        {...register("zip")}
        error={errors.zip?.message}
      />
    </div>
  );
};

export default AddressStep;
