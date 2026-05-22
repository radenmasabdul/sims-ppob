import { User, AtSign, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProfile } from "../../hooks/useProfile";
import foto from "@/assets/foto.png";

export default function ProfilePage() {
  const {
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
  } = useProfile();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const avatarSrc = previewImage
    ? previewImage
    : profile?.profile_image?.includes("/null")
      ? foto
      : profile?.profile_image || foto;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm bg-gray-50">
              <img
                src={avatarSrc}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <Button
              type="button"
              onClick={() => isEditing && fileInputRef.current?.click()}
              disabled={!isEditing}
              aria-label="Ganti foto profil"
              className={`absolute bottom-0 right-0 w-7 h-7 bg-white border border-gray-200 rounded-full p-0 shadow-sm transition-colors
                ${
                  isEditing
                    ? "hover:bg-gray-50 cursor-pointer"
                    : "opacity-40 cursor-not-allowed"
                }`}
            >
              <Pencil className="w-3.5 h-3.5 text-gray-600" />
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <h1 className="text-center text-2xl font-bold text-gray-900 mb-8">
          {profile?.first_name} {profile?.last_name}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">
              Email
            </p>
            <div
              className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-xl bg-white"
            >
              <AtSign className="w-4 h-4 text-gray-400 shrink-0" />
              <span className="text-gray-500 text-sm">{profile?.email}</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label
              className="text-sm font-medium text-gray-700"
              htmlFor="first_name"
            >
              Nama Depan
            </Label>
            <div
              className={`flex items-center gap-3 px-4 py-3 border rounded-xl bg-white transition-all
                ${
                  isEditing
                    ? "border-gray-200 focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-200"
                    : "border-gray-200"
                }`}
            >
              <User className="w-4 h-4 text-gray-400 shrink-0" />
              {isEditing ? (
                <Input
                  {...register("first_name")}
                  placeholder="Nama depan"
                  autoComplete="first_name"
                  id="first_name"
                  autoFocus
                  className="border-0 shadow-none focus-visible:ring-0 px-0 py-0 text-sm text-gray-800 h-auto"
                />
              ) : (
                <span className="text-sm text-gray-800">
                  {profile?.first_name}
                </span>
              )}
            </div>
            {errors.first_name && (
              <p className="text-xs text-red-500">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              className="text-sm font-medium text-gray-700"
              htmlFor="last_name"
            >
              Nama Belakang
            </Label>
            <div
              className={`flex items-center gap-3 px-4 py-3 border rounded-xl bg-white transition-all
                ${
                  isEditing
                    ? "border-gray-200 focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-200"
                    : "border-gray-200"
                }`}
            >
              <User className="w-4 h-4 text-gray-400 shrink-0" />
              {isEditing ? (
                <Input
                  {...register("last_name")}
                  placeholder="Nama belakang"
                  id="last_name"
                  className="border-0 shadow-none focus-visible:ring-0 px-0 py-0 text-sm text-gray-800 h-auto"
                />
              ) : (
                <span className="text-sm text-gray-800">
                  {profile?.last_name}
                </span>
              )}
            </div>
            {errors.last_name && (
              <p className="text-xs text-red-500">{errors.last_name.message}</p>
            )}
          </div>

          {isEditing && (
            <div className="pt-3 space-y-3">
              <Button
                type="submit"
                disabled={isSaving}
                className="w-full py-2 h-auto rounded-sm bg-red-500 text-white font-semibold text-sm hover:bg-red-600 active:scale-[0.98] transition-all cursor-pointer"
              >
                {isSaving ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Menyimpan...
                  </span>
                ) : (
                  "Simpan"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isSaving}
                className="w-full py-2 h-auto rounded-sm border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer"
              >
                Batal
              </Button>
            </div>
          )}
        </form>

        {!isEditing && (
          <div className="mt-8 space-y-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleEditClick}
              className="w-full py-2 h-auto rounded-sm border-red-500 text-red-500 font-semibold text-sm hover:bg-red-50 hover:text-red-500 active:scale-[0.98] transition-all cursor-pointer"
            >
              Edit Profile
            </Button>
            <Button
              type="button"
              onClick={handleLogout}
              className="w-full py-2 h-auto rounded-sm bg-red-500 text-white font-semibold text-sm hover:bg-red-600 active:scale-[0.98] transition-all cursor-pointer"
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
