"use client";

import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
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
    <nav
      className={clsx(
        "fixed top-4 left-4 right-4 lg:left-4 lg:right-4 z-50",
        "rounded-3xl border border-white/20 bg-black/60 backdrop-blur-md shadow-lg"
      )}
    >
      <div className="flex items-center justify-between w-full px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <NextLink href="/" className="flex items-center no-underline">
            <Image
              alt="Franzua Plasencia"
              src="/static/logo.png"
              width={40}
              height={40}
              priority
              className="rounded-full"
            />
            <span
              className={clsx(
                "ml-2 font-bold text-white",
                pathname === "/" ? "animate__animated animate__fadeIn" : ""
              )}
            >
              Franzua Plasencia
            </span>
          </NextLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigationLinks.map((link) => (
            <NextLink
              key={link.title}
              href={link.href}
              className={clsx(
                "no-underline text-white/80 hover:text-white",
                pathname === link.href
                  ? "text-white font-medium"
                  : ""
              )}
            >
              {link.title}
            </NextLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {navigationSocialLinks.map((link) => (
            <NextLink
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white no-underline"
            >
              <link.icon cursor={"pointer"} size={20} />
            </NextLink>
          ))}
          <NextLink
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Button size="sm" className="bg-white text-black">
              <span className="hidden lg:inline">Download CV</span>
              <AiOutlineDownload className="lg:hidden" />
            </Button>
          </NextLink>
        </div>

        {/* Mobile Menu - DropdownTrigger already renders a button */}
        <Dropdown className="md:hidden">
          <DropdownTrigger>
            <svg
              className="w-6 h-6 text-white md:hidden cursor-pointer"
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
                    "w-full no-underline text-white",
                    pathname === link.href ? "text-primary font-medium" : ""
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
                className="text-white no-underline"
              >
                Download CV
              </NextLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
