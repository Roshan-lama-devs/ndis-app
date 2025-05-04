import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import DataTable from "@/components/data-table";
import { bowelColumns } from "@/components/bowelcolumns";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import BowelForm from "@/components/BowelForm";
import { Plus } from "lucide-react";

const getBowelData = async () => {
  return [
    {
      date: "2025/01/05",
      time: "23:23 AM",
      status: "Bowel Open",
      size: "T4",
      createdBy: "Roshan",
    },
    {
      date: "2025/01/05",
      time: "23:23 AM",
      status: "Bowel Open",
      size: "T4",
      createdBy: "Roshan",
    },
    {
      date: "2025/01/05",
      time: "23:23 AM",
      status: "Bowel Open",
      size: "T4",
      createdBy: "Roshan",
    },
    {
      date: "2025/01/05",
      time: "23:23 AM",
      status: "Bowel Open",
      size: "T4",
      createdBy: "Roshan",
    },
    {
      date: "2025/01/05",
      time: "23:23 AM",
      status: "Bowel Open",
      size: "T4",
      createdBy: "Roshan",
    },
  ];
};

const BowelChart = () => {
  const [singleBowelData, setBowelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataBowel = await getBowelData();
      setBowelData(dataBowel);
    };

    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Bowel Chart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-8 px-4 py-2 bg-secondary items-center flex justify-between rounded-md">
        <h1 className="font-semibold">Bowel Chart</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Plus />
              Add
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add bowel Record</SheetTitle>
              <SheetDescription>
                Add bowel information here. Choose apropriate field. Click save
                when you're done.
              </SheetDescription>
            </SheetHeader>
            <BowelForm />
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <DataTable columns={bowelColumns} data={singleBowelData} />
    </div>
  );
};

export default BowelChart;
