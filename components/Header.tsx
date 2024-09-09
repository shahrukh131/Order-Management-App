import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
interface HeaderProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (open: boolean) => void;
}

const Header = ({ isSideBarOpen, setIsSideBarOpen }: HeaderProps) => {
  const { setTheme } = useTheme();
  const path = usePathname();
  return (
    <div className="min-h-12 w-full flex justify-between items-center px-6">
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="sm" className="hidden md:block" onClick={()=>setIsSideBarOpen(!isSideBarOpen)}>
          <HamburgerMenuIcon className="h-6 w-6" />
        </Button>
        <div className="md:hidden flex gap-2 items-center">
          <Link href="/" passHref>
            <Button variant={path === "/" ? "default" : "secondary"}>
              Home
            </Button>
          </Link>
          <Link href="/order-tracker" passHref>
            <Button variant={path === "/" ? "default" : "secondary"}>
              Order Tracker
            </Button>
          </Link>
          <Link href="/analytics" passHref>
            <Button variant={path === "/" ? "default" : "secondary"}>
              Analytics
            </Button>
          </Link>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Header;
