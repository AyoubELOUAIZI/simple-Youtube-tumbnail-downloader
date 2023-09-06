"use client";
import React, { useState } from "react";
import { HeroThree } from "../heroThree/HeroThree";
import { HeroTow } from "../heroTow/HeroTow";

export const ThumbnailDownloader = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handelVideoUrlChange = (videoUrl) => {
    console.log(videoUrl);

    const videoIdRegex =
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/;

    if (videoIdRegex.test(videoUrl)) {
      const videoId =
        videoUrl.split("v=")[1] || videoUrl.split("/").slice(-1)[0];
      // Change the thumbnail image URL
      setImageUrl(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`);
    } else {
      setImageUrl("");
    }
  };

  return (
    <div>
      <HeroThree handelVideoUrlChange={handelVideoUrlChange} />
      <HeroTow imageUrl={imageUrl} />
    </div>
  );
};
