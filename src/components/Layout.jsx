import React from "react";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-sm sm:max-w-sm md:max-w-md relative">
        <Menu />
        <main className="bg-white">{children}</main>
      </div>
    </div>
  );
}
