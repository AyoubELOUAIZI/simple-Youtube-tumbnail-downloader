import Link from "next/link";
import React from "react";

export const HeroFour = () => {
  return (
    <div className="h-screen flex items-center bg-blue-700">
      <div className="px-4 mx-auto mt-16 mb-16 max-w-7xl sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title">
            <span className="block">Video</span>
            <span className="block pt-2"> Thumbnails</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Video thumbnails on YouTube are vital. They&apos;re the first
            impression viewers get, influencing click-through rates and
            engagement. A well-designed thumbnail can make your content stand
            out, driving more views and connecting with your audience
            effectively.
          </p>
          <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href="/youtube-thumbnails"
                className="block shadow-lg w-full px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-10"
              >
                More About Youtube Thumbnail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
