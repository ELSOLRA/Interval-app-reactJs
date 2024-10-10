import React from "react";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-sm sm:max-w-sm md:max-w-md px-4 relative">
        <div className="absolute top-4 left-8">
          <Menu />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
