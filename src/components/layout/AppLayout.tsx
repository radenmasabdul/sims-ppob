import Navbar from "./Navbar"
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <Navbar />

      <div className="p-4 md:p-6">
        <Outlet />
      </div>
    </>
  );
}
