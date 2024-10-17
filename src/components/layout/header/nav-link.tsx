"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { smoothScroll } from "@/lib/utils";

interface NavLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
  link: string;
  external?: boolean;
}

export const NavLink = ({ children, link, external }: NavLinkProps) => {
  const currentRoute = usePathname();

  return (
    <Link
      href={link.toLowerCase()}
      target={external ? "_blank" : ""}
      scroll={false}
      className={clsx(
        "hover:text-meme-yellow text-white",
        currentRoute === `/${link.toLowerCase()}` && "text-meme-yellow"
      )}
      id={`layout-${link}`}
      onClick={() => {
        if (link.startsWith("/#")) {
          smoothScroll(link.replace("/#", ""));
        }
      }}
    >
      {children}
    </Link>
  );
};
