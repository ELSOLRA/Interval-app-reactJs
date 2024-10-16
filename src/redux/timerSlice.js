import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minutes: 0,
  currentMinutes: 0,
  intervalsEnabled: false,
  pauseBetweenIntervals: false,
  isRunning: false,
  isBreak: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimerSettings: (state, action) => {
      console.log("state...", state);
      console.log("action", action);

      return { ...state, ...action.payload };
    },
    /*     setTimerSettings: (state, action) => {
      state.minutes = action.payload.minutes;
      state.secondsLeft = action.payload.minutes * 60;
    }, */
    startTimer: (state, action) => {
      state.isRunning = true;
      if (action.payload) {
        state.isBreak = action.payload.isBreak;
        state.currentMinutes = action.payload.currentMinutes;
      } else {
        state.currentMinutes = state.minutes;
      }
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    startPause: (state) => {
      if (state.currentMinutes > 0) {
        state.currentMinutes -= 1 / 60;
      }
    },

    resetTimer: () => {
      return {
        ...initialState,
      };
    },
    decrementTimer: (state) => {
      if (state.currentMinutes > 0) {
        state.currentMinutes -= 1 / 60;
      } else if (state.intervalsEnabled) {
        if (state.isBreak) {
          state.currentMinutes = state.minutes;
          state.isBreak = false;
        } else if (state.pauseBetweenIntervals) {
          // Start break
          state.currentMinutes = 5;
          state.isBreak = true;
        } else {
          state.currentMinutes = state.minutes;
        }
      } else {
        // Timer complete
        state.isRunning = false;
      }
    },
  },
});

export const {
  setTimerSettings,
  startTimer,
  resetTimer,
  decrementTimer,
  startPause,
} = timerSlice.actions;
export default timerSlice.reducer;
