import AppSideBar from "@/components/AppSideBar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const LayoutProvider = ({ children }) => {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSideBar />

        <main className="w-full">
          <Navbar />

          <div className="p-4">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default LayoutProvider;
