import React /* , { useState } */ from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTimerSettings, startTimer } from "../redux/timerSlice";
import checkedbox from "../assets/checkedbox.svg";
import uncheckedbox from "../assets/uncheckedbox.svg";

const CustomCheckbox = ({ checked, onChange, label }) => (
  <label className="flex items-center cursor-pointer">
    <div className="relative">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-6 h-6">
        <img
          src={checked ? checkedbox : uncheckedbox}
          alt={checked ? "Checked" : "Unchecked"}
          className="w-full h-full"
        />
      </div>
    </div>
    <span className="ml-2 text-base font-bold text-gray-800">{label}</span>
  </label>
);

const ArrowButton = ({ onClick, direction, label }) => (
  <button
    type="button"
    onClick={onClick}
    className="  hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
    aria-label={label}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  </button>
);

export default function SetTimer() {
  const dispatch = useDispatch();
  const { minutes, intervalsEnabled, pauseBetweenIntervals } = useSelector(
    (state) => state.timer
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startTimer());
    navigate("/analog");
  };

  const decreaseMinutes = () =>
    dispatch(setTimerSettings({ minutes: Math.max(1, minutes - 1) }));
  const increaseMinutes = () =>
    dispatch(setTimerSettings({ minutes: minutes + 1 }));

  const handleIntervalChange = (e) => {
    dispatch(setTimerSettings({ intervalsEnabled: e.target.checked }));
  };

  const handlePauseChange = (e) => {
    dispatch(setTimerSettings({ pauseBetweenIntervals: e.target.checked }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 mx-auto max-w-sm sm:max-w-sm md:max-w-md shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-8 mb-24">
        <div className="flex items-center justify-between mb-16">
          <ArrowButton
            onClick={decreaseMinutes}
            direction="left"
            label="Decrease minutes"
          />
          <div className="flex flex-col items-center">
            <div className="text-7xl  font-bold">{minutes}</div>
            <div className="text-gray-500 font-medium">minutes</div>
          </div>
          <ArrowButton
            onClick={increaseMinutes}
            direction="right"
            label="Increase minutes"
          />
        </div>

        <div className="flex flex-col gap-6  ">
          <div>
            <CustomCheckbox
              checked={intervalsEnabled}
              onChange={handleIntervalChange}
              label="Enable intervals"
            />
          </div>

          {intervalsEnabled && (
            <div>
              <CustomCheckbox
                checked={pauseBetweenIntervals}
                onChange={handlePauseChange}
                label="5 minute break / interval"
              />
            </div>
          )}
        </div>

        <button
          className="w-full hover:bg-slate-300 font-sans text-black text-2xl font-bold tracking-widest py-3 mx-auto rounded border border-black focus:outline-none focus:shadow-outline transition duration-300 ease-in-out "
          type="submit">
          START TIMER
        </button>
      </form>
    </div>
  );
}
