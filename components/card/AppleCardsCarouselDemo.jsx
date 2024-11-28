"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ImazineContent from "../projects/ImazineContent";
import SnapContent from "../projects/SnapContent";
import GembookContent from "../projects/GembookContent";
import AppleGadgetContent from "../projects/AppleGadgetContent";
import RedbananaContent from "../projects/RedbananContent";
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full  flex flex-col">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Projects
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}


const data = [
  {
    category: "Imazine",
    title: "Ecommerce",
    src: "/projects/imazine.png",
    content: <ImazineContent />,
  },
  {
    category: "Snap",
    title: "Social Media Website",
    src: "/projects/snap.png",
    content: <SnapContent />,
  },
  {
    category: "Gembook",
    title: "E-commerce Book Store",
    src: "/projects/gembook.png",
    content: <GembookContent />,
  },

  {
    category: "AppleGadget",
    title: "E-commerce Electronics",
    src: "/projects/applegadget.png",
    content: <AppleGadgetContent />,
  },
  {
    category: "Redbanana",
    title: "Random Features",
    src: "/projects/redbanana.png",
    content: <RedbananaContent />,
  },
  
];
