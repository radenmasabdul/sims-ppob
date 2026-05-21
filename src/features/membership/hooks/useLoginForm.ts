import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../schemas/auth.schema";
import { useLoginMutation } from "../services/auth.api";
import { loginSuccess } from "../stores/auth.store";
import { setAlert } from "@/stores/alert";
import type { AppDispatch } from "@/stores";
import type { BaseResponse } from "@/types/api"

export function useLoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [loginMutation, { isLoading }] = useLoginMutation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await loginMutation(values).unwrap();

      dispatch(loginSuccess({ token: response.data.token }));
      dispatch(setAlert({ type: "success", message: response.message }));

      navigate("/home");
    } catch (error: unknown) {
      const err = error as { data?: BaseResponse<null> };
      dispatch(setAlert({ type: "error", message: err?.data?.message ?? "" }));
    }
  };

  return {
    form,
    showPassword,
    isLoading,
    togglePassword,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
