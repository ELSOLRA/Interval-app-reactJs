import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrementTimer, resetTimer, startTimer } from "../redux/timerSlice";

export default function AnalogTimer() {
  const {
    minutes,
    currentMinutes,
    intervalsEnabled,
    pauseBetweenIntervals,
    /*     currentInterval, */
    isRunning,
    isBreak,
  } = useSelector((state) => state.timer);
  /*   const [secondsLeft, setSecondsLeft] = useState(minutes * 60); */

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    /*  const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000); */
    /*     dispatch(startTimer()); */
    const interval = setInterval(() => {
      if (isRunning) {
        dispatch(decrementTimer());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, isRunning]);

  useEffect(() => {
    if (currentMinutes <= 0) {
      if (!intervalsEnabled) {
        dispatch(resetTimer());
        navigate("/set-timer");
      } else if (pauseBetweenIntervals && !isBreak) {
        // Start break timer
        dispatch(startTimer({ isBreak: true, currentMinutes: 5 }));
        navigate("/break");
      } else {
        // Start next interval or continue if no pause
        dispatch(startTimer({ isBreak: false, currentMinutes: minutes }));
      }
    }
  }, [
    minutes,
    currentMinutes,
    intervalsEnabled,
    pauseBetweenIntervals,
    isBreak,
    dispatch,
    navigate,
  ]);

  const handleAbort = () => {
    dispatch(resetTimer());
    navigate("/set-timer");
  };

  const totalSeconds = Math.floor(currentMinutes * 60);
  const minutesLeft = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const minuteHandRotation = (minutesLeft / 60) * 360;
  const secondHandRotation = (seconds / 60) * 360;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mt-4 text-center">
        {intervalsEnabled && <p className=" text-black">Interval </p>}
      </div>

      <svg viewBox="0 0 100 100" width="300" height="300">
        {/* Hour markers */}
        {[...Array(60)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="0"
            x2="50"
            y2="5"
            transform={`rotate(${i * 6} 50 50)`}
            stroke="gray"
            strokeWidth="1"
          />
        ))}

        {/* Minute hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="10"
          stroke="black"
          strokeWidth="2"
          transform={`rotate(${minuteHandRotation} 50 50)`}
        />

        {/* Second hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="5"
          stroke="gray"
          strokeWidth="1"
          transform={`rotate(${secondHandRotation} 50 50)`}
        />
      </svg>

      <div className="mt-4 text-2xl font-bold">
        {String(minutesLeft).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>

      <button
        onClick={handleAbort}
        className="mt-4 px-4 hover:bg-slate-300 font-sans text-gray-500 text-2xl font-bold tracking-widest py-3 mx-auto rounded border border-black focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ">
        Abort Timer
      </button>
    </div>
  );
}
