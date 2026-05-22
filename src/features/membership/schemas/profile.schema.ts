import { z } from "zod";

export const updateProfileSchema = z.object({
  first_name: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  last_name: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
});

export const updateProfileImage = z.object({
  file: z
    .any()
    .refine((file) => file, "File is required")
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/webp"].includes(
          file?.mimetype || file?.type
        ),
      "Only image files are allowed"
    )
    .refine(
      (file) => (file?.size || 0) <= 100 * 1024,
      "Max file size is 100KB"
    ),
});

export type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;
export type UpdateProfileImageValues = z.infer<typeof updateProfileImage>;