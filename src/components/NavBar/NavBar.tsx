"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDownload } from "react-icons/ai";
import { navigationLinks, navigationSocialLinks } from "@/config";
import clsx from "clsx";

const CV_URL =
  "https://drive.google.com/file/d/1EzDE1OclEwuoM39Xk7zKYSAwiKyPzdlc/view?usp=sharing";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar fixed top-2 left-2 right-2 lg:left-4 lg:right-4 z-50 px-3 lg:px-4">
      <div className="flex items-center justify-between w-full h-full">
        {/* Logo */}
        <NextLink href="/" className="flex items-center no-underline flex-shrink-0">
          <Image
            alt="Franzua Plasencia"
            src="/static/logo.png"
            width={28}
            height={28}
            priority
            className="rounded-full"
          />
          <span
            className={clsx(
              "ml-2 font-medium text-sm hidden lg:inline",
              pathname === "/" ? "animate__animated animate__fadeIn" : ""
            )}
            style={{ color: "var(--navbar-fg)" }}
          >
            Franzua Plasencia
          </span>
        </NextLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navigationLinks.map((link) => (
            <NextLink
              key={link.title}
              href={link.href}
              className={clsx("navbar-link", pathname === link.href && "navbar-link--active")}
            >
              {link.title}
            </NextLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {navigationSocialLinks.map((link) => (
            <NextLink
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline navbar-link"
            >
              <link.icon cursor={"pointer"} size={18} />
            </NextLink>
          ))}
          <NextLink href={CV_URL} target="_blank" rel="noopener noreferrer" className="no-underline">
            <button className="navbar-btn-outline">
              <AiOutlineDownload size={13} />
              <span>Download CV</span>
            </button>
          </NextLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center relative">
          <button
            onClick={() => setOpen(!open)}
            className="navbar-btn-outline"
            style={{ minWidth: 0, width: "2rem", height: "2rem", padding: 0, justifyContent: "center" }}
          >
            <span style={{ fontSize: "1rem", lineHeight: 1 }}>{open ? "✕" : "☰"}</span>
          </button>

          {/* Mobile Dropdown */}
          {open && (
            <div
              className="absolute top-full right-0 mt-2 rounded-xl border border-white/20"
              style={{
                background: "rgba(0, 0, 0, 0.85)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                minWidth: "10rem",
                padding: "0.5rem 0",
              }}
            >
              {navigationLinks.map((link) => (
                <NextLink
                  key={link.title}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "navbar-link block px-4 py-2",
                    pathname === link.href && "navbar-link--active"
                  )}
                >
                  {link.title}
                </NextLink>
              ))}
              <div className="border-t border-white/10 my-1" />
              <NextLink
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="navbar-link block px-4 py-2"
              >
                Download CV
              </NextLink>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop to close menu */}
      {open && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
