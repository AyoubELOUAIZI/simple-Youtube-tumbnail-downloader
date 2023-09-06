import React from "react";

export const Footer = () => {
  return (
    <footer class="flex flex-col items-center   bg-white text-center text-white  dark:text-neutral-200">
      <div class="container p-6">
        <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      <div class="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a class="dark:text-neutral-400" href="https://tailwind-elements.com/">
          YV-Thumbnail
        </a>
      </div>
    </footer>
  );
};
