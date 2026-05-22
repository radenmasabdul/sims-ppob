import Swal from "sweetalert2";
import React from "react";
import { renderToString } from "react-dom/server";
import { Check, X, Wallet } from "lucide-react";
import { formatRupiah } from "./currency";

const renderIcon = (icon: React.ReactElement) => renderToString(icon);

type StatusModalParams = {
  type: "success" | "error";
  amount: number;
  navigate: (path: string) => void;
};

type StatusPaymentParams = {
  type: "success" | "error";
  amount: number;
  serviceName: string;
  navigate: (path: string) => void;
};

export const showConfirmTopUpModal = async (amount: number) => {
  const icon = renderIcon(
    React.createElement(Wallet, {
      size: 34,
      color: "white",
      strokeWidth: 2.5,
    }),
  );

  return await Swal.fire({
    html: `
      <div class="flex flex-col items-center">
        <div class="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-red-500">
          ${icon}
        </div>

        <p class="text-base text-gray-500">
          Anda yakin untuk Top Up sebesar
        </p>

        <h2 class="mt-2 text-3xl font-bold text-gray-900">
          ${formatRupiah(amount)} ?
        </h2>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: "Ya, lanjutkan Top Up",
    cancelButtonText: "Batalkan",
    buttonsStyling: false,
    customClass: {
      popup: "rounded-3xl px-8 py-10",
      actions: "flex flex-col w-full mt-8 gap-3",
      confirmButton:
        "text-red-500 font-semibold text-lg hover:text-red-600 cursor-pointer",
      cancelButton:
        "text-gray-400 font-medium text-base hover:text-gray-500 cursor-pointer",
    },
  });
};

export const showStatusModal = async ({
  type,
  amount,
  navigate,
}: StatusModalParams) => {
  const isSuccess = type === "success";

  const icon = isSuccess
    ? renderIcon(
        React.createElement(Check, {
          size: 34,
          color: "white",
          strokeWidth: 3,
        }),
      )
    : renderIcon(
        React.createElement(X, {
          size: 34,
          color: "white",
          strokeWidth: 3,
        }),
      );

  const result = await Swal.fire({
    html: `
      <div class="flex flex-col items-center">
        <div class="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full ${
          isSuccess ? "bg-emerald-400" : "bg-orange-500"
        }">
          ${icon}
        </div>

        <p class="text-base text-gray-500">
          Top Up sebesar
        </p>

        <h2 class="mt-2 text-3xl font-bold text-gray-900">
          ${formatRupiah(amount)}
        </h2>

        <p class="mt-2 text-base text-gray-500">
          ${isSuccess ? "berhasil!" : "gagal"}
        </p>
      </div>
    `,
    confirmButtonText: "Kembali ke Beranda",
    buttonsStyling: false,
    customClass: {
      popup: "rounded-3xl px-8 py-10",
      confirmButton:
        "text-red-500 font-semibold text-lg mt-8 hover:text-red-600 cursor-pointer",
    },
  });

  if (result.isConfirmed) {
    navigate("/home");
  }
};

export const showConfirmPaymentModal = async ({
  serviceName,
  amount,
}: Pick<StatusPaymentParams, "serviceName" | "amount">) => {
  const icon = renderIcon(
    React.createElement(Wallet, {
      size: 34,
      color: "white",
      strokeWidth: 2.5,
    }),
  );

  return await Swal.fire({
    html: `
      <div class="flex flex-col items-center">
        <div class="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-red-500">
          ${icon}
        </div>

        <p class="text-base text-gray-500">
          Beli ${serviceName} senilai
        </p>

        <h2 class="mt-2 text-3xl font-bold text-gray-900">
          ${formatRupiah(amount)} ?
        </h2>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: "Ya, lanjutkan Bayar",
    cancelButtonText: "Batalkan",
    buttonsStyling: false,
    customClass: {
      popup: "rounded-3xl px-8 py-10",
      actions: "flex flex-col w-full mt-8 gap-3",
      confirmButton:
        "text-red-500 font-semibold text-lg hover:text-red-600 cursor-pointer",
      cancelButton:
        "text-gray-400 font-medium text-base hover:text-gray-500 cursor-pointer",
    },
  });
};

export const showStatusPayment = async ({
  type,
  amount,
  serviceName,
  navigate,
}: StatusPaymentParams) => {
  const isSuccess = type === "success";

  const icon = isSuccess
    ? renderIcon(
        React.createElement(Check, {
          size: 34,
          color: "white",
          strokeWidth: 3,
        }),
      )
    : renderIcon(
        React.createElement(X, {
          size: 34,
          color: "white",
          strokeWidth: 3,
        }),
      );

  const result = await Swal.fire({
    html: `
      <div class="flex flex-col items-center">
        <div class="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full ${
          isSuccess ? "bg-emerald-400" : "bg-orange-500"
        }">
          ${icon}
        </div>

        <p class="text-base text-gray-500">
          Pembayaran ${serviceName} senilai
        </p>

        <h2 class="mt-2 text-3xl font-bold text-gray-900">
          ${formatRupiah(amount)}
        </h2>

        <p class="mt-2 text-base text-gray-500">
          ${isSuccess ? "berhasil!" : "gagal"}
        </p>
      </div>
    `,
    confirmButtonText: "Kembali ke Beranda",
    buttonsStyling: false,
    customClass: {
      popup: "rounded-3xl px-8 py-10",
      confirmButton:
        "text-red-500 font-semibold text-lg mt-8 hover:text-red-600 cursor-pointer",
    },
  });

  if (result.isConfirmed) {
    navigate("/home");
  }
};
