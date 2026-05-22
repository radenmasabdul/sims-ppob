import Navbar from "./Navbar"
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
          <Outlet />
        </div>
      </div>
    </>
  );
}
