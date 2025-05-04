import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-100 p-4 md:block hidden">
        <h2 className="text-lg font-semibold">Admin Panel</h2>{" "}
        <ul>
          <li>Add Client</li>
          <li>Add Staff</li>
          <li>Add Client</li>
          <li>Add Client</li>
        </ul>
      </aside>
      <main className="flex-grow p-6 bg-gray-50">{children}</main>
    </div>
  );
};

export default DashboardLayout;
