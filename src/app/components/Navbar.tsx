"use client";
import Link from "next/link";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { IoCarSport } from "react-icons/io5";
import ResponsiveMenu from "./ResponsiveMenu";
import { Dispatch, SetStateAction, useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
export const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Cars",
    link: "/#cars",
  },
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 1,
    name: "Booking",
    link: "/#booking",
  },
];

type Theme = "light" | "dark";

interface NavbarProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span>
              <IoCarSport className="size-8 mt-[-2px] text-amber-400" />
            </span>{" "}
            <Link
              href="/"
              className="text-3xl uppercase font-bold font-Afacad bg-gradient-to-r from-amber-400 to-pink-600 text-transparent bg-clip-text"
            >
              Car Rental
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex font-Afacad text-xl items-center gap-10 uppercase">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    href={data.link}
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* dark mode icons  */}
              <div>
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-2xl"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </div>
            </ul>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            {/* dark mode icons  */}
            <div>
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </div>
            {/* mobile hamburger menu  */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
}
