import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementTimer, resetTimer } from "../redux/timerSlice";
import { useNavigate } from "react-router-dom";

export default function DigitalTimer() {
  const { currentMinutes, isRunning, intervalsEnabled } = useSelector(
    (state) => state.timer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        dispatch(decrementTimer());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, isRunning]);

  useEffect(() => {
    if (currentMinutes <= 0) {
      navigate("/set-timer");
    }
  }, [navigate, currentMinutes]);

  const handleAbort = () => {
    dispatch(resetTimer());
    navigate("/set-timer");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mt-4 text-center">
        <p className="text-2xl font-bold">
          {Math.floor(currentMinutes)}:
          {String(Math.floor((currentMinutes % 1) * 60)).padStart(2, "0")}
        </p>
        {intervalsEnabled && <p className=" text-black">Interval </p>}
      </div>
      <button
        onClick={handleAbort}
        className="mt-4 px-4 hover:bg-slate-300 font-sans text-gray-500 text-2xl font-bold tracking-widest py-3 mx-auto rounded border border-black focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ">
        Abort Timer
      </button>
    </div>
  );
}
