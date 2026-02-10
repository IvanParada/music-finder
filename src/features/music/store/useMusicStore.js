import { create } from "zustand";

export const useMusicStore = create((set) => ({
    results: [
        { id: 1, title: "Track 1" },
        { id: 2, title: "Track 2" },
        { id: 3, title: "Track 3" },
        { id: 4, title: "Track 4" },
        { id: 5, title: "Track 5" },
        { id: 6, title: "Track 6" },
    ],
    setResults: (results) => set({ results }),
}));
