import Image from "next/image";
import React from "react";
import youtubebackground from "public/youtubebackground.png";

export const HeroTow = ({ imageId }) => {
  const OpenThumbnailImage = () => {
    if (!imageId) {
      // there is no image
      return;
    }
    const url = `https://img.youtube.com/vi/${imageId}/sddefault.jpg`;

    // Create a hidden anchor element
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);

    // Set the anchor's href to the image URL, download attribute for specifying the file name,
    // and target attribute to ensure it opens in a new tab
    a.href = url;
    a.setAttribute("download", `${imageId}.jpg`);
    a.setAttribute("target", "_blank");

    // Trigger a click event on the anchor element to initiate the download
    a.click();

    // Clean up by removing the anchor element
    document.body.removeChild(a);
  };

  const downloadThumbnailImage = () => {
    if (!imageId) {
      // there is no image
      return;
    }
    console.log("starting download of thumbnail");
    // the download implementation

    const image = document.getElementById("captured-image");
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height);

    // Convert the canvas to a data URL and trigger the download
    const dataURL = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "captured-image.jpg";
    link.click();
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Get a Sneak Peek at the Captivating
              <br className="hidden lg:inline-block" />
              YouTube Video Thumbnail!
            </h1>
            <p className="mb-8 leading-relaxed">
              Once you&apos;ve pasted the YouTube video URL in the input field
              above, you&apos;ll have the opportunity to preview the thumbnail
              image. If the URL is correct, you can easily download the image
              with a right-click or simply click the button to open the image in
              a new tab. This seamless process ensures a convenient experience
              for users looking to access YouTube video thumbnails effortlessly.
            </p>
            <div className="flex justify-center">
              <button
                onClick={OpenThumbnailImage}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Open Thumbnail
              </button>
              {/* <button
                onClick={downloadThumbnailImage}
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Download
              </button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="thumbnail"
              src={
                imageId
                  ? `https://img.youtube.com/vi/${imageId}/sddefault.jpg`
                  : youtubebackground
              }
              width="auto" // Set your desired width here
              height="auto" // Set your desired height here
              // https://ergonotes.com/wp-content/uploads/2022/11/Find-YouTube-Thumbnail-Source.jpg
            />
          </div>
        </div>
      </section>
    </div>
  );
};
