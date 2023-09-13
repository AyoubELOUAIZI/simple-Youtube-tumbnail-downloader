import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NiceHero = () => {
  return (
    <div>
      <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <Image
            class="h-full w-full object-cover"
            src="https://picsum.photos/id/1019/2000"
            alt="Winding mountain road"
            width={400} // Set your desired width here
            height={300} // Set your desired height here
          />
        </div>

        <div class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-blue-800 lg:text-4xl">
              What is YouTube video thumbnail
            </h2>
            <p class="mt-4">
              A YouTube video thumbnail is a small, static image that represents
              a video and is displayed as a preview or teaser before viewers
              click to watch the video. Thumbnails are a crucial element in
              attracting viewers&lsquo; attention and encouraging them to click
              on a video. They typically feature a visually appealing image or
              graphic related to the video&lsquo;s content, along with text or
              captions, which can provide context or entice viewers to learn
              more about the video. Thumbnails serve as a visual summary of the
              video&lsquo;s content and play a significant role in helping users
              decide whether or not to click on and watch a particular video on
              the YouTube platform. Effective thumbnails are often designed to
              be eye-catching, informative, and compelling to increase the
              video&lsquo;s click-through rate and overall visibility.
            </p>

            <div class="mt-8">
              <Link
                href="/"
                class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
