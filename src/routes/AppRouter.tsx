import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/membership/auth/LoginPage";
import RegisterPage from "@/pages/membership/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/home/Home";
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
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
