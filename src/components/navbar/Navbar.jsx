"use client";
import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  // const button = document.querySelector('#menu-button');
  // const menu = document.querySelector('#menu');

  // button.addEventListener('click', () => {
  //   menu.classList.toggle('hidden');
  // });

  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };

  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-8
          md:py-0
          px-8
          text-lg text-gray-700
          bg-white
          fixed
          z-40
         
        "
      >
        <div>
          <Link href="/">YT-Thumbnail</Link>
        </div>

        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isMenuHidden ? "hidden" : ""
          }`}
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/youtube-thumbnails"
              >
                Youtube Thumbnails
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
