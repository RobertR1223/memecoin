"use client";

import { MemeCoinLogo } from "@/components/memecoin";
import { NavConnect } from "./nav-connect";
import { NavLink } from "./nav-link";
import { useState, useEffect } from "react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components";
import { navLinks } from "@/constants/header";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[200] w-full sm:px-16 px-8 py-5"
      style={{ backdropFilter: isScrolled ? "blur(80px)" : "none" }}
    >
      <nav className="flex sm:items-center justify-between mx-auto inset-0 px-0 container w-full">
        <div>
          <MemeCoinLogo />
        </div>
        <ul className="xl:flex xl:visible hidden items-center justify-between p-0 2xl:text-[20px] text-[18px] text-white 2xl:gap-[30px] gap-[15px] uppercase">
          {navLinks.map((link, index) => (
            <li
              className="hover:text-meme-yellow hover:scale-105 transition duration-200 cursor-pointer"
              key={index + link.link}
            >
              <NavLink
                link={!!link.link ? link.link : "#"}
                external={link.external}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 items-center">
          <Button
            className="py-4 px-6 lg:block hidden"
            variant="meme-yellow-outline"
            onClick={() =>
              window.open("https://next.test.astradao.org/launchpad/")
            }
          >
            Buy Lucky Dog
          </Button>
          <div className="lg:block hidden">
            <NavConnect />
          </div>
          <div className="xl:hidden">
            <button
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              {toggleMenu ? (
                <Cross1Icon className="text-white w-12 h-12" />
              ) : (
                <HamburgerMenuIcon className="text-white w-12 h-12" />
              )}
            </button>
            {toggleMenu && (
              <ul className="p-6 absolute top-20 right-0 bg-gray-800 rounded-lg shadow-lg text-[24px] text-center text-white 2xl:gap-[45px] gap-5 transition duration-300 ease-in-out transform origin-top-right scale-95">
                <li className="hover:text-meme-yellow hover:scale-105 transition duration-200 py-2 lg:hidden block">
                  <Button className="py-4 px-6" variant="meme-yellow-outline">
                    Buy DAO Launchpad
                  </Button>
                </li>
                <li className="hover:text-meme-yellow hover:scale-105 transition duration-200 py-2 lg:hidden block">
                  <NavConnect />
                </li>
                {navLinks.map((link, index) => (
                  <li
                    className="hover:text-meme-yellow hover:scale-105 transition duration-200 cursor-pointer"
                    key={index + link.link}
                  >
                    <NavLink link={!!link.link ? link.link : "#"}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
