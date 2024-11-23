"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavbarAnime";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="-top-5" />
      <p className="text-black dark:text-white">
    
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        "absolute top-10 inset-x-0 max-w-2xl mx-auto z-50", // Changed 'fixed' to 'absolute'
        className
      )}
    >
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Links">
  <div className="flex flex-col space-y-4 text-sm">
    <HoveredLink href="https://github.com/ronssrony" target="_blank" rel="noopener noreferrer">
      GitHub
    </HoveredLink>
    <HoveredLink href="https://www.linkedin.com/in/md-abdullah-al-mamun-a058982a7/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </HoveredLink>
    <HoveredLink href="https://www.codechef.com/users/ronssrony" target="_blank" rel="noopener noreferrer">
      CodeChef
    </HoveredLink>
    <HoveredLink href="https://leetcode.com/u/ronssrony/" target="_blank" rel="noopener noreferrer">
      LeetCode
    </HoveredLink>

  </div>
</MenuItem>

 <MenuItem setActive={setActive} active={active} item="Resume">
  <div className="flex flex-col space-y-4 text-sm">
    <HoveredLink
      href="/ProResume.pdf"
      download="MdAbdullahAlMamun_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download CV
    </HoveredLink>
    <HoveredLink href="https://drive.google.com/file/d/1uCzKUJpICd61E5_LlnsNPkHNRisXPHVr/view?usp=sharing" target="_blank">
      View Resume
    </HoveredLink>
  </div>
</MenuItem>
      </Menu>
    </div>
  );
}
