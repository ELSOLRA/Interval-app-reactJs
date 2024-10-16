import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breakPause, startPause, startTimer } from "../redux/timerSlice";
import { useNavigate } from "react-router-dom";

export default function Break_Pause() {
  const { currentMinutes, isRunning, intervalsEnabled } = useSelector(
    (state) => state.timer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        dispatch(startPause());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, isRunning]);

  useEffect(() => {
    if (currentMinutes <= 0) {
      navigate("/analog");
    }
  }, [navigate, currentMinutes]);

  const handleAbort = () => {
    dispatch(breakPause());
    dispatch(startTimer());
    navigate("/analog");
  };

  return (
    <div className="mt-4 text-center">
      <div className="text-2xl font-bold">
        <p>Running pause, chill.............</p>
        {Math.floor(currentMinutes)}:
        {String(Math.floor((currentMinutes % 1) * 60)).padStart(2, "0")}
      </div>
      <button
        onClick={handleAbort}
        className="mt-4 px-4 hover:bg-slate-300 font-sans text-gray-500 text-2xl font-bold tracking-widest py-3 mx-auto rounded border border-black focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ">
        NO PAUSE, GO NOW!
      </button>
    </div>
  );
}
