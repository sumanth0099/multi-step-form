import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Input from "../UI/Input";

const AccountCreationStep = () => {
  const { register, formState: { errors }, watch } = useFormContext();
  const [usernameAvailable, setUsernameAvailable] = useState(true);

  const username = watch("username");

  React.useEffect(() => {
    if (!username) return;
    const timer = setTimeout(() => {
      setUsernameAvailable(username.toLowerCase() !== "admin");
    }, 500);
    return () => clearTimeout(timer);
  }, [username]);

  return (
    <div>
      <Input label="Username" {...register("username")} error={errors.username?.message || (!usernameAvailable && "Username not available")} />
      <Input label="Password" type="password" {...register("password")} error={errors.password?.message} />
      <Input label="Confirm Password" type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
    </div>
  );
};

export default AccountCreationStep;
