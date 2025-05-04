import AppChart from "@/components/AppChart";
import CardList from "@/components/CardList";
import QuestionsCard from "@/components/QuestionsCard";
import TodoList from "@/components/TodoList";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      <div className="bg-primary-foreground p-4 max-h-[500px]  rounded-lg  col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1">
        <QuestionsCard />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-3 sm:col-span-3 md:col-span-1 ">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-3 sm:col-span-3 md:col-span-1">
        <TodoList /> rtet
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-3 md:col-span-2 ">
        <AppChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
    </div>
  );
};

export default AdminDashboard;
