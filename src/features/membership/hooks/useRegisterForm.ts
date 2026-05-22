import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterFormValues,
} from "../schemas/auth.schema";
import { useRegisterMutation } from "../services/auth.api";
import { setAlert } from "@/stores/alert";
import type { AppDispatch } from "@/stores";
import type { BaseResponse } from "@/types/api";

export function useRegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [registerMutation, { isLoading }] = useRegisterMutation();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const onSubmit = async (values: RegisterFormValues) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword: _, ...payload } = values;
    try {
      const response = await registerMutation(payload).unwrap();

      dispatch(
        setAlert({
          type: "success",
          message: response.message,
        }),
      );

      navigate("/");
    } catch (error: unknown) {
      const err = error as { data?: BaseResponse<null> };
      dispatch(setAlert({ type: "error", message: err?.data?.message ?? "" }));
    }
  };

  return {
    form,
    showPassword,
    showConfirmPassword,
    isLoading,
    togglePassword,
    toggleConfirmPassword,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
