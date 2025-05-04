import { Button } from "@/components/ui/button";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/ThemeProvider";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { setTheme } = useTheme();
  //   console.log(setTheme);
  return (
    //{*****}

    <nav className="flex p-4 justify-between items-center">
      <SidebarTrigger />
      <div className="flex items-center gap-4 ">
        <Link>Dashboard</Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Setting
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>

    //{*****}

    // <header className="w-full bg-white shadow-sm border-b">
    //   <nav className="mx-auto flex items-center justify-between px-4 py-4 max-w-7xl">
    //     <h1 className="text-2xl font-bold text-gray-800">NDIS Tool</h1>

    //     {/* Desktop Menu */}
    //     <ul className="hidden md:flex gap-6 items-center">
    //       <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200">
    //         Home
    //       </li>

    //       <DropdownMenu>
    //         <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
    //           Features
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent>
    //           <DropdownMenuItem>Bowel Chart</DropdownMenuItem>
    //           <DropdownMenuItem>Liquid Intake</DropdownMenuItem>
    //           <DropdownMenuItem>Client Reports</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>

    //       <li className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200">
    //         Pricing
    //       </li>
    //     </ul>

    //     {/* Desktop Buttons */}
    //     <div className="hidden md:flex gap-3">
    //       <Button variant="outline">Sign In</Button>
    //       <Button>Sign Up</Button>
    //     </div>

    //     {/* Mobile Menu */}
    //     <div className="md:hidden">
    //       <Sheet>
    //         <SheetTrigger>
    //           <GiHamburgerMenu size={24} />
    //         </SheetTrigger>
    //         <SheetContent side="left" className="w-64">
    //           <div className="flex flex-col gap-4">
    //             <h2 className="text-lg font-semibold">Menu</h2>
    //             <Separator />
    //             <span className="cursor-pointer hover:text-blue-600">Home</span>
    //             <span className="cursor-pointer hover:text-blue-600">
    //               Features
    //             </span>
    //             <span className="cursor-pointer hover:text-blue-600">
    //               Pricing
    //             </span>
    //             <Separator />
    //             <Button variant="outline">Sign In</Button>
    //             <Button>Sign Up</Button>
    //           </div>
    //         </SheetContent>
    //       </Sheet>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Navbar;
