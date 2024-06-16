import { Button, Link, NavbarItem } from "@nextui-org/react";
import { AiOutlineDownload } from "react-icons/ai";

import { navigationSocialLinks } from "@/config";

const CV_URL =
  "https://drive.google.com/file/d/1rcRGmlSABk2yvCuphu89V40s3-LCQzpv/view?usp=sharing";

export function NavBarActions() {
  return (
    <>
      {navigationSocialLinks.map((link, _) => (
        <NavbarItem key={link.title}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            color="foreground"
          >
            <link.icon cursor={"pointer"} />
          </Link>
        </NavbarItem>
      ))}

      <NavbarItem>
        <Button as={Link} color="secondary" href={CV_URL} variant="shadow">
          <div className="hidden lg:block">Download</div>
          CV &nbsp; <AiOutlineDownload />
        </Button>
      </NavbarItem>
    </>
  );
}
