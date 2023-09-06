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
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          fixed
          z-40
         
        "
      >
        <div>
          <a href="#">YV-Thumbnail</a>
        </div>

        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
            class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                Features
              </a>
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                Customers
              </a>
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
