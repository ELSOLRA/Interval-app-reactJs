import React from "react";
import { Link } from "react-router-dom";
import loading from "../assets/loading.svg";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
      <Link to="/set-timer" className="">
        <img
          src={loading}
          alt="Logo"
          className="w-28 h-16 animate-pulse-scale"
        />
      </Link>
      <p className="text-sm sm:text-base text-white text-center">
        For all your timing needs
      </p>
    </div>
  );
}
