"use client"

import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("flex justify-center mt-8 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <HoveredLink href="/">Home</HoveredLink>
          <HoveredLink href="/">Projects</HoveredLink>
          <HoveredLink href="/">About</HoveredLink>
          <HoveredLink href="/">Contact</HoveredLink>
        </Menu>
      </div>
    );
}
