import React from "react";
import { NavLink } from "./Links/NavLink";

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 md:py-6 md:mb-6 dark:bg-black bg-white">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <div className="items-start flex">
          <NavLink href="/" label="Vincent McKen" />
        </div>
        <div className="items-end flex space-x-5">
          <NavLink href="/projects" label="Projects" />
        </div>
      </div>
    </div>
  );
};
