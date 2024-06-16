"use client";

import { Link, NavbarItem } from "@nextui-org/react";

import { navigationLinks } from "@/config";
import { usePathname } from "next/navigation";

export function NavBarItemList() {
  const path = usePathname();

  console.log(path);

  return (
    <>
      {navigationLinks.map((link, _) => (
        <NavbarItem key={link.title}>
          <Link
            color={link.href === path ? "primary" : "foreground"}
            href={link.href}
            aria-current={link.href === path ? "page" : "false"}
          >
            {link.title}
          </Link>
        </NavbarItem>
      ))}
    </>
  );
}
