"use client";
import React, { useState } from "react";

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
          <a href="#">YV-Thumbnail</a>
        </div>

        {/* <svg
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
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                AboutUS
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
};
