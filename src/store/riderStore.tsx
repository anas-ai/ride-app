import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage } from "./stroage";

type CustomLocation = {
  latitude: number;
  longitude: number;
  address: string;
  heading: string;
} | null;

interface UserStoreProps {
  user: any;
  location: CustomLocation;
  onDuty: boolean;
  setUser: (data: any) => void;
  setOnDuty: (data: any) => void;
  setLocation: (data: any) => void;
  clearRiderData: () => void;
}

export const useRiderStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      user: null,
      location: null,
      onDuty: false,
      setUser: (data) => set({ user: data }),
      setLocation: (data) => set({ location: data }),
      setOnDuty: (data: CustomLocation) => set({ location: data }),
      clearRiderData: () => set({ user: null, location: null, onDuty: false }),
    }),
    {
      name: "rider-store",
      partialize: (state) => ({
        user: state.user,
      }),
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
