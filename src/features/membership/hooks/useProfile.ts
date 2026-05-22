import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema, updateProfileImage as updateProfileImageSchema, type UpdateProfileFormValues } from "../schemas/profile.schema";
import { useGetProfileQuery, useUpdateProfileMutation, useUpdateProfileImageMutation } from "../services/profile.api";
import { setEditMode, resetEdit } from "../stores/profile.store";
import { logout } from "../stores/auth.store";
import { setAlert } from "@/stores/alert";
import { type RootState, type AppDispatch } from "@/stores";

export function useProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isEditing } = useSelector((state: RootState) => state.profile);

  const { data, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isSaving }] = useUpdateProfileMutation();
  const [updateProfileImageMutation] = useUpdateProfileImageMutation();

  const profile = data?.data;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [pendingImage, setPendingImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
    },
  });

  const handleEditClick = () => {
    reset({
      first_name: profile?.first_name ?? "",
      last_name: profile?.last_name ?? "",
    });
    dispatch(setEditMode(true));
  };

  const handleCancel = () => {
    reset();
    setPendingImage(null);
    setPreviewImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    dispatch(resetEdit());
  };

  const onSubmit = async (values: UpdateProfileFormValues) => {
    try {
      if (pendingImage) {
        const formData = new FormData();
        formData.append("file", pendingImage);
        const imageRes = await updateProfileImageMutation(formData).unwrap();
        dispatch(setAlert({ message: imageRes.message, type: "success" }));
        setPendingImage(null);
        setPreviewImage(null);
      }

      const res = await updateProfile(values).unwrap();
      dispatch(setAlert({ message: res.message, type: "success" }));
      dispatch(resetEdit());
      reset();
    } catch (err: unknown) {
      const message =
        (err as { data?: { message?: string } })?.data?.message ??
        "Terjadi kesalahan";
      dispatch(setAlert({ message, type: "error" }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const result = updateProfileImageSchema.safeParse({ file });
    if (!result.success) {
      dispatch(
        setAlert({ message: result.error.issues[0].message, type: "error" }),
      );
      e.target.value = "";
      return;
    }

    setPendingImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setAlert({ message: "Berhasil logout", type: "success" }));
    navigate("/login");
  };

  return {
    profile,
    isLoading,
    isSaving,
    isEditing,
    fileInputRef,
    previewImage,
    register,
    handleSubmit,
    errors,
    handleEditClick,
    handleCancel,
    onSubmit,
    handleImageChange,
    handleLogout,
  };
}
