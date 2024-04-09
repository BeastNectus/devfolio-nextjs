"use client"

import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="relative h-auto w-auto overflow-hidden">
      <div className="flex w-screen h-screen">
        <div className="w-full p-5 overflow-auto no-scrollbar flex flex-col items-center">
          {children}
        </div>
      </div>
    </main>
  );
}
