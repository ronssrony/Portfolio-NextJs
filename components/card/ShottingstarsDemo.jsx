"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-starts";
import { StarsBackground } from "@/components/ui/starts-background";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    (<div
      className="h-[30rem] rounded-md  flex flex-col items-center justify-center absolute w-[calc(100%-2rem)]  ">
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}
