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

    startTimer: (state, action) => {
      state.isRunning = true;
      if (action.payload) {
        state.isBreak = action.payload.isBreak;
        state.currentMinutes = action.payload.currentMinutes;
      } else {
        state.currentMinutes = state.minutes;
      }
    },
    startPause: (state) => {
      if (state.currentMinutes > 0) {
        state.currentMinutes -= 1 / 60;
      }
    },
    breakPause: (state) => {
      state.isBreak = false;
      if (state.currentMinutes > 0) {
        state.currentMinutes = 0;
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
        if (state.currentMinutes < 0.01) {
          state.currentMinutes = 0;
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
  breakPause,
} = timerSlice.actions;
export default timerSlice.reducer;
