"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "../ui/sidebar";
import NavLinks from "./navlinks";
import BuildingSwitcher from "./building-switcher";
import { Logo, LogoIcon } from "../logo";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody>
        <div className="flex md:flex-col flex-1 overflow-y-auto overflow-x-hidden gap-4 md:gap-8">
          <Link href="/">
            {open ? <Logo w={40} h={40} /> : <LogoIcon w={40} h={40} />}
          </Link>
          <Separator className="hidden md:block" />
          <NavLinks />
        </div>
        <BuildingSwitcher open={open} />
      </SidebarBody>
    </Sidebar>
  );
}
