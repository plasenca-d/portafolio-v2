"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";
import { NavbarBrand, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";

export function NavBarLogo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Image
          alt="Franzua Plasencia"
          src={`/static/logo.png`}
          width="50"
          height="50"
          priority
        />
        <p
          color="inherit"
          className={
            pathName === "/" ? "animate__animated animate__fadeIn" : ""
          }
        >
          Franzua Plasencia
        </p>
      </NavbarBrand>
    </>
  );
}
