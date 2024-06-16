"use client";

import { usePathname } from "next/navigation";

import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

import { navigationLinks } from "@/config";

export function NavBarMenuList() {
  const pathName = usePathname();

  return (
    <NavbarMenu>
      {navigationLinks.map((link, _) => (
        <NavbarMenuItem key={link.title}>
          <Link
            color={pathName === link.href ? "primary" : "foreground"}
            className="w-full"
            size="lg"
          >
            {link.title}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
}
