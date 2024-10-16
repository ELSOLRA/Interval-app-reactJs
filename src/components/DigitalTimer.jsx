import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { useNavigate } from "react-router-dom"; */
import { decrementTimer } from "../redux/timerSlice";

export default function DigitalTimer() {
  const { currentMinutes, isRunning, intervalsEnabled } = useSelector(
    (state) => state.timer
  );
  const dispatch = useDispatch();
  /*   const navigate = useNavigate(); */

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        dispatch(decrementTimer());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, isRunning]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mt-4 text-center">
        <p className="text-2xl font-bold">
          {Math.floor(currentMinutes)}:
          {String(Math.floor((currentMinutes % 1) * 60)).padStart(2, "0")}
        </p>
        {intervalsEnabled && <p className=" text-black">Interval </p>}
      </div>
    </div>
  );
}
