import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="absolute top-4 left-4 z-50 hover:bg-gray-300 text-gray-800 font-bold rounded inline-flex items-center transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? (
          <img src="/menuclose.svg" alt="Close Menu" className="w-8 h-8" />
        ) : (
          <img src="/menu.svg" alt="Open Menu" className="w-8 h-8" />
        )}
      </button>

      {isOpen && (
        <div className="absolute inset-0 bg-gray-200  z-40 flex items-center justify-center rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-8 w-full font-sans font-bold text-2xl text-gray-400">
            <Link
              to="/analog"
              className="block px-4 py-2  hover:bg-white drop-shadow-xl"
              onClick={() => setIsOpen(false)}>
              Analog Timer
            </Link>
            <Link
              to="/digital"
              className="block px-4 py-2  hover:bg-white drop-shadow-xl"
              onClick={() => setIsOpen(false)}>
              Digital Timer
            </Link>
            <Link
              to="/set-timer"
              className="block px-4 py-2  hover:bg-white drop-shadow-xl"
              onClick={() => setIsOpen(false)}>
              Set Timer
            </Link>
            <Link
              to="/alarm"
              className="block px-4 py-2  hover:bg-white drop-shadow-xl"
              onClick={() => setIsOpen(false)}>
              Alarm
            </Link>
            <Link
              to="/pause"
              className="block px-4 py-2 hover:bg-white drop-shadow-xl"
              onClick={() => setIsOpen(false)}>
              Pause
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
