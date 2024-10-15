import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    minutes: 0,
    interval: 1,
    pauseBetweenIntervals: false,
    isRunning: false,
    view: "analog",
  },
  reducers: {
    /*     setTimerSettings: (state, action) => {
      console.log("state...", state);
      console.log("action", action);

      return { ...state, ...action.payload };
    }, */
    setTimerSettings: (state, action) => {
      state.minutes = action.payload.minutes;
      state.secondsLeft = action.payload.minutes * 60;
    },
    startTimer: (state) => {
      state.isRunning = true;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.secondsLeft = state.minutes * 60;
      state.isRunning = false;
    },
    toggleView: (state) => {
      state.view = state.view === "analog" ? "digital" : "analog";
    },
  },
});

export const { setTimerSettings } = timerSlice.actions;
export default timerSlice.reducer;
