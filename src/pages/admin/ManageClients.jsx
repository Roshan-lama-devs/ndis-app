import AppChart from "@/components/AppChart";
import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";
const ManageClients = () => {
  return (
    <div>
      {" "}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/"> Dashbaord</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Clients</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6 ">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">Client Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button>
                    <Link to="/addclient">Add Client</Link>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This use has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-red-500/30 border-1 border-red-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This use has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-bule-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This use has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-bule-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This use has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Client Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Client information
                </p>
                <Progress value={69} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold ">Username:</span>
                <span>John Cena</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold ">Email:</span>
                <span>johncena@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold ">Phone:</span>
                <span>+1 123 432 543</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold ">Location:</span>
                <span>Youcantseeme, Drive, 234</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold ">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">Joined on</p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* Right
         */}

        <div className="w-full xl:w-2/3  space-y-6 ">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1612535500858-06e800115812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
                <AvatarFallback>JC</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Cena</h1>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
              deserunt?
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClients;
