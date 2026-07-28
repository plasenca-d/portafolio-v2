"use client";

import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Header,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { navigationLinks, navigationSocialLinks } from "@/config";
import clsx from "clsx";

const CV_URL =
  "https://drive.google.com/file/d/1EzDE1OclEwuoM39Xk7zKYSAwiKyPzdlc/view?usp=sharing";

export function NavBar() {
  const pathname = usePathname();

  return (
    <Header
      className={clsx(
        "fixed rounded-3xl mt-4 lg:ml-4 lg:mr-4",
        "border-transparent bg-white/70 backdrop-blur-md shadow-lg",
        "dark:bg-black/70"
      )}
    >
      <div className="flex items-center justify-between w-full px-4">
        {/* Logo */}
        <div className="flex items-center">
          <NextLink href="/" className="flex items-center no-underline">
            <Image
              alt="Franzua Plasencia"
              src="/static/logo.png"
              width={50}
              height={50}
              priority
              className="rounded-full"
            />
            <span
              className={clsx(
                "ml-2 font-bold text-foreground",
                pathname === "/" ? "animate__animated animate__fadeIn" : ""
              )}
            >
              Franzua Plasencia
            </span>
          </NextLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4">
          {navigationLinks.map((link) => (
            <NextLink
              key={link.title}
              href={link.href}
              className={clsx(
                "no-underline",
                pathname === link.href
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
              )}
            >
              {link.title}
            </NextLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {navigationSocialLinks.map((link) => (
            <NextLink
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary no-underline"
            >
              <link.icon cursor={"pointer"} />
            </NextLink>
          ))}
          <NextLink
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Button size="sm">
              <span className="hidden lg:inline">Download CV</span>
              <AiOutlineDownload className="lg:hidden" />
            </Button>
          </NextLink>
        </div>

        {/* Mobile Menu - DropdownTrigger is already a button */}
        <Dropdown>
          <DropdownTrigger>
            <svg
              className="w-8 h-8 sm:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </DropdownTrigger>
          <DropdownMenu aria-label="Navigation menu">
            {navigationLinks.map((link) => (
              <DropdownItem key={link.title}>
                <NextLink
                  href={link.href}
                  className={clsx(
                    "w-full no-underline",
                    pathname === link.href
                      ? "text-primary font-medium"
                      : "text-foreground"
                  )}
                >
                  {link.title}
                </NextLink>
              </DropdownItem>
            ))}
            <DropdownItem key="cv">
              <NextLink
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground no-underline"
              >
                Download CV
              </NextLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Header>
  );
}
