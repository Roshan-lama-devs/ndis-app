import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Home,
  Inbox,
  Settings,
  ChevronDown,
  Plus,
  ChartArea,
  PersonStanding,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

// Sample nav items — you can expand this structure as needed
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    children: [],
  },
  {
    title: "Client",
    url: "/clients",
    icon: Inbox,
    children: [
      { title: "All Clients", url: "/clientpage", icon: Plus },
      { title: "Single Client", url: "/singleclientpage" },
      { title: "Add Client", url: "/addclient" },
    ],
  },
  {
    title: "Staff",
    url: "/staff",
    icon: PersonStanding,
    children: [
      { title: "All Staff", url: "/staffpage" },
      { title: "Single Staff", url: "/singlestaffpage" },
    ],
  },
  {
    title: "Charts",
    url: "/charts",
    icon: ChartArea,
    children: [
      { title: "Bowel Chart", url: "/bowelchart" },
      { title: "Fluid Chart", url: "/fluidchart" },
    ],
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    children: [],
  },
];

const AppSideBar = () => {
  return (
    <div className="h-screen">
      <Sidebar collapsible="icon">
        <SidebarHeader className="text-3xl font-bold">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to={"/"}>Shift Care</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.children.length > 0 ? (
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                              <item.icon className="w-4 h-4" />
                              <span>{item.title}</span>
                            </div>
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children.map((child) => (
                              <SidebarMenuSubItem key={child.title}>
                                <Link to={child.url}>{child.title}</Link>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild>
                        <Link to={item.url} className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter></SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSideBar;
