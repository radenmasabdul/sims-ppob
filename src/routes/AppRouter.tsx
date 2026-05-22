import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/membership/auth/LoginPage";
import RegisterPage from "@/pages/membership/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/home/Home";
import TopupPage from "@/pages/transaction/TopUpPage";
import TransactionPage from "@/pages/transaction/TransactionPage";
import PaymentPage from "@/pages/transaction/PaymentPage";
import NotFound from "@/pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/topup" element={<TopupPage />} />
            <Route path="/payment/:service_code" element={<PaymentPage />} />
            <Route path="/transaction" element={<TransactionPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
