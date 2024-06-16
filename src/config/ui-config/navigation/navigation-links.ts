interface NavigationLink {
  title: string;
  href: string;
  urlname: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    title: "Home",
    href: "/",
    urlname: "/",
  },
  {
    title: "Expertise",
    href: "/#expertise",
    urlname: "/#expertise",
  },
  {
    title: "Projects",
    href: "/#projects",
    urlname: "/#projects",
  },
  {
    title: "About",
    href: "/#about",
    urlname: "/#about",
  },
  {
    title: "Blog",
    href: "/blog",
    urlname: "/blog",
  },
];
