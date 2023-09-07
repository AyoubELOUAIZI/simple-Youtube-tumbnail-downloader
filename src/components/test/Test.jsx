"use client";
import React from "react";

export const Test = () => {
  const download = () => {
    var element = document.createElement("a");
    var file = new Blob(
      [
        "https://timesofindia.indiatimes.com/thumb/msid-70238371,imgsize-89579,width-400,resizemode-4/70238371.jpg",
      ],
      { type: "image/*" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };
  return (
    <div className="App">
      <a
        href="https://timesofindia.indiatimes.com/thumb/msid-70238371,imgsize-89579,width-400,resizemode-4/70238371.jpg"
        download
        onClick={() => download()}
      >
        <i className="fa fa-download" />
        download
      </a>
    </div>
  );
};
