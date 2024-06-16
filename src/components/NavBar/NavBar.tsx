import Image from "next/image";

import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { NavBarLogo } from "./NavBarLogo";

import { NavBarMenuList } from "./NavBarMenuList";
import { navigationLinks, navigationSocialLinks } from "@/config";
import { NavBarItemList } from "./NavBarItemList";
import { AiOutlineDownload } from "react-icons/ai";
import { NavBarActions } from "./NavBarActions";
import clsx from "clsx";

export function NavBar() {
  return (
    <Navbar
      position="sticky"
      className={clsx(
        "fixed rounded-3xl mt-4 lg:ml-4 lg:mr-4",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-0",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-primary"
      )}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavBarLogo />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavBarItemList />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavBarActions />
      </NavbarContent>
      <NavBarMenuList />
    </Navbar>
  );
}
