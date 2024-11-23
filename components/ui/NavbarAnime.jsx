"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};
export const MenuItem = ({ setActive, active, item, children }) => {
    return (
      <div onMouseEnter={() => setActive(item)} className="relative">
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
          >
            {active === item && (
              <div
                className="absolute top-full -left-2 w-max mt-3" 
              >
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                >
                  <motion.div
                    layout
                    className="w-max h-full p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    );
  };
  
export const Menu = ({
  setActive,
  children
}) => {
  return (
    (<nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full   dark:border-white/[0.2]  shadow-input flex justify-center space-x-10 px-8 py-6 ">
      {children}
    </nav>)
  );
};



export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    (<Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-slate-200 ">
      {children}
    </Link>)
  );
};
