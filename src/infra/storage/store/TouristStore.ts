import { create } from "zustand";
import { TouristState } from "./types";

export const useTouristStore = create<TouristState>((set) => {
  return {
    actionType: null,
    tempTourist: null,
    removeTempTourist: () => set({ tempTourist: null, actionType: null }),
    setTempTourist: (tourist, actionType) =>
      set({ tempTourist: tourist, actionType: actionType }),
  };
});
