import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { useAuth } from "./context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffDashboard from "./pages/client/StaffDashboard";
import AppSideBar from "./components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import LayoutProvider from "./context/LayoutProvider";
import ManageStaff from "./pages/admin/ManageStaff";
import SingleClientPage from "./pages/admin/SingleClientPage";
import SingleStaff from "./pages/admin/SingleStaff";
import ManageClients from "./pages/admin/ManageClients";
import AddClient from "./pages/admin/AddClient";

import BowelChart from "./pages/BowelChart";
import FluidChart from "./pages/FluidChart";

function App() {
  const { role } = useAuth();
  return (
    <>
      <LayoutProvider>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/staffpage" element={<ManageStaff />} />
          <Route path="/clientpage" element={<ManageClients />} />
          <Route path="/singleclientpage" element={<SingleClientPage />} />
          <Route path="/singlestaffpage" element={<SingleStaff />} />
          <Route path="/addclient" element={<AddClient />} />
          {/* <Route path="/bowelchart" element={<AddBowelChart />} /> */}
          {/* Charts */}
          <Route path="/bowelchart" element={<BowelChart />} />
          <Route path="/fluidchart" element={<FluidChart />} />

          <Route
            path="/dashboard"
            element={
              role.role === "admin" ? (
                <AdminDashboard />
              ) : role.role === "staff" ? (
                <StaffDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </LayoutProvider>
    </>
  );
}

export default App;
