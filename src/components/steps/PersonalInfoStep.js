import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "../UI/Input";

const PersonalInfoStep = () => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div>
      <Input label="First Name" {...register("firstName")} error={errors.firstName?.message} />
      <Input label="Last Name" {...register("lastName")} error={errors.lastName?.message} />
      <Input label="Email" {...register("email")} error={errors.email?.message} />
      <Input label="Phone" {...register("phone")} error={errors.phone?.message} />
      <Input label="Age" type="number" {...register("age", { valueAsNumber: true })} error={errors.age?.message} />
    </div>
  );
};

export default PersonalInfoStep;
