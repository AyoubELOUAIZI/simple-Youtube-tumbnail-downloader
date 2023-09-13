import { NiceHero } from "@/components/niceHero/NiceHero";
import { SimpleHero } from "@/components/simpleHero/SimpleHero";
import React from "react";

export default function YoutubeThumbnails() {
  return (
    <div className="">
      <main className="p-4">
        <NiceHero />
        <br />
        <br />
        <SimpleHero />
      </main>
    </div>
  );
}
