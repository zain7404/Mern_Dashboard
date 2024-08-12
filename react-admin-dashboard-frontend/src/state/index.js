import { createSlice } from "@reduxjs/toolkit";

const initialMode = localStorage.getItem("mode") || "dark";

const initialState = {
  mode: initialMode,
  userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";

      localStorage.setItem("mode", state.mode);
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
