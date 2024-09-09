import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const LeftNav = () => {
  const path = usePathname();
  return (
    <div className="flex flex-col min-w-72 gap-3 p-2 pt-6 max-h-screen">
      <h1 className="text-3xl text-center">Order Management</h1>
      <Link href="/" passHref>
        <Button
          variant={path == "/" ? "default" : "secondary"}
          className="w-full"
        >
          Home
        </Button>
      </Link>
      <Link href="/order-tracker" passHref>
        <Button
          variant={path == "/order-tracker" ? "default" : "secondary"}
          className="w-full"
        >
          Order Tracker
        </Button>
      </Link>
      <Link href="/analytics" passHref>
        <Button
          variant={path == "/analytics" ? "default" : "secondary"}
          className="w-full"
        >
          Analytics
        </Button>
      </Link>
    </div>
  );
};

export default LeftNav;
