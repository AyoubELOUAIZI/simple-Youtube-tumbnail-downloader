import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center   bg-white text-center text-white  dark:text-neutral-200">
      <div className="container p-6">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          YV-Thumbnail
        </a>
      </div>
    </footer>
  );
};
