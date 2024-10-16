import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startPause } from "../redux/timerSlice";
import { useNavigate } from "react-router-dom";

export default function Break_Pause() {
  const { currentMinutes, isRunning, intervalsEnabled } = useSelector(
    (state) => state.timer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*   useEffect(() => {
    dispatch(startPause());
  }, []); */

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

  return (
    <div className="mt-4 text-center">
      <div className="text-2xl font-bold">
        <p>Running pause, chill.............</p>
        {Math.floor(currentMinutes)}:
        {String(Math.floor((currentMinutes % 1) * 60)).padStart(2, "0")}
      </div>
    </div>
  );
}
