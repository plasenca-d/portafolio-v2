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

export function NavBar() {
  return (
    <Navbar
      position="sticky"
      className="fixed rounded-3xl mt-4 lg:ml-4 lg:mr-4"
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
