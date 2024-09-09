"use client"

import Header from "@/components/Header";
import LeftNav from "@/components/LeftNav";
import React, { ReactNode, useState } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const layout = ({ children }: MyComponentProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <div className="flex-auto flex">
        <div className="hidden md:block">{isSideBarOpen && <LeftNav/>}</div>
        <div className="flex-auto p-8">{children}</div>
      </div>
  
    </div>
  );
};

export default layout;
