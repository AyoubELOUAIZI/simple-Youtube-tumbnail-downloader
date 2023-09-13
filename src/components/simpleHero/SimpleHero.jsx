import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SimpleHero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The Power of Thumbnails: Why YouTube
              <br class="hidden lg:inline-block" />
              Video Thumbnails Are Crucial
            </h1>
            <p class="mb-8 leading-relaxed">
              In the vast digital landscape of YouTube, where millions of videos
              compete for viewers&lsquo; attention, the role of the video
              thumbnail cannot be overstated. A compelling YouTube video
              thumbnail is akin to the cover of a book, providing a sneak peek
              into the content within. It is the initial impression that
              potential viewers see, making it a critical factor in whether they
              decide to click and watch your video or scroll past it. A
              well-crafted thumbnail has the power to captivate, intrigue, and
              convey the essence of your video&lsquo;s message. It can entice
              viewers with vibrant visuals, convey the video&lsquo;s topic, and
              even evoke emotions, ultimately influencing the click-through rate
              and, subsequently, the success of your content. In an era where
              attention spans are shorter than ever, the YouTube video thumbnail
              serves as your digital storefront, beckoning users to explore the
              world you&lsquo;ve created in your video. It&lsquo;s not just an
              image; it&lsquo;s the gateway to your content&lsquo;s success.
            </p>
            <div class="flex justify-center">
              <Link
                href="/"
                class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                back home
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              class="object-cover object-center rounded"
              alt="hero"
              src="/sseo.jpeg"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
            />
          </div>
        </div>
      </section>
    </div>
  );
};
