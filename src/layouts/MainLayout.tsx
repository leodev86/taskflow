import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex">
        <Sidebar
         isOpen={sidebarOpen}
         closeSidebar={closeSidebar}
         />

        {sidebarOpen && (
          <div
            onClick={closeSidebar}
            className="
              fixed
              inset-0
              bg-black/40
              z-40
            "
          />
        )}

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
