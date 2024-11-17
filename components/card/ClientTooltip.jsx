"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/tooltip";
const people = [
    {
      id: 1,
      name: "Node.js",
      designation: "Backend Framework",
      image: "/svg/nodejs-icon.svg",
    },
    {
      id: 2,
      name: "Express",
      designation: "Web Framework",
      image: "/svg/express.svg",
    },
    {
      id: 3,
      name: "React",
      designation: "Frontend Library",
      image: "/svg/react-2.svg",
    },
    {
      id: 4,
      name: "Next",
      designation: "Fullstack Framework",
      image: "/svg/next1.svg",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      designation: "CSS Framework",
      image: "/svg/tailwind-css-2.svg",
    },
    {
      id: 6,
      name: "JWT",
      designation: "Authentication Token",
      image: "/svg/jwt-3.svg",
    },
    {
      id: 7,
      name: "Socket.IO",
      designation: "Real-Time Communication",
      image: "/svg/socket-io.svg",
    },
    {
      id: 8,
      name: "WebRTC",
      designation: "P2P Communication",
      image: "/svg/webrtc.svg",
    },
    {
      id: 9,
      name: "MongoDB",
      designation: "NoSQL Database",
      image: "/svg/mongodb.svg",
    },
    {
      id: 10,
      name: "MySQL",
      designation: "Relational Database",
      image: "/svg/mysql.svg",
    },
    {
      id: 11,
      name: "PostgreSQL",
      designation: "Relational Database",
      image: "/svg/pgsql.svg",
    },
    {
      id: 12,
      name: "Redis",
      designation: "Caching System",
      image: "/svg/redis.svg",
    },
    {
      id: 13,
      name: "Git",
      designation: "Version Control",
      image: "/svg/git-icon.svg",
    },
    {
      id: 14,
      name: "Netlify",
      designation: "Deployment Platform",
      image: "/svg/netlify.svg",
    },
    {
      id: 15,
      name: "Render",
      designation: "Cloud Hosting",
      image: "/svg/render.svg",
    }
  ];
  
  
  

export function AnimatedTooltipPreview() {
  return (
    (<div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>)
  );
}
