"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import {
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui";
import { navLinks } from "@/constants";
import { TLink } from "@/types";
import clsx from "clsx";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function NavLink({ navLink }: { navLink: TLink }) {
  if (!!navLink.menu) {
    return (
      <NavigationMenuItem className="nav-item-active">
        <NavigationMenuTrigger>
          <span>{navLink.name}</span>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul
            className="grid gap-3 p-4 
             md:w-[550px] lg:w-[725px]
             lg:grid-cols-[.75fr_1fr]"
          >
            {navLink.menu.map((menuLink) => (
              <ListItem
                href={menuLink.link}
                title={menuLink.name}
                key={menuLink.link + menuLink.name}
              >
                {!!menuLink.description
                  ? menuLink.description
                  : "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  } else if (navLink.authenticated) {
    return null;
  } else {
    return (
      <NavigationMenuItem className="nav-item-active">
        <Link href={navLink.link} legacyBehavior passHref>
          <NavigationMenuLink className={clsx(navigationMenuTriggerStyle())}>
            <span>{navLink.name}</span>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }
}

export function NavMenu() {
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList>
        {navLinks.map((navLink, index) => (
          <NavLink
            navLink={navLink}
            key={navLink.name + index + navLink.link}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
