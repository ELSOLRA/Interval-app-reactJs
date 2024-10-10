import React, { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <button
        className="hover:bg-gray-300 text-gray-800 font-bold rounded inline-flex items-center transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu">
        <img src="/menu.svg" alt="Menu" className="w-8 h-8" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
          <Link
            to="/analog-timer"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Analog Timer
          </Link>
          <Link
            to="/digital-timer"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Digital Timer
          </Link>
          <Link
            to="/set-timer"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Set Timer
          </Link>
        </div>
      )}
    </div>
  );
}
