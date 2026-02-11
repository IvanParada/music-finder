import { create } from "zustand";
import { searchSongs } from "../api/itunes";

export const useMusicStore = create((set, get) => {
  let audio = new Audio();

  audio.addEventListener("timeupdate", () => {
    set({
      currentTime: audio.currentTime,
      duration: audio.duration || 0,
    });
  });

  audio.addEventListener("ended", () => {
    set({ isPlaying: false });
  });

  return {
    results: [],
    loading: false,
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,

    fetchResults: async () => {
      set({ loading: true });
      try {
        const results = await searchSongs();
        set({ results, loading: false });
      } catch (error) {
        console.error("Error fetching songs:", error);
        set({ loading: false });
      }
    },

    playTrack: (track) => {
      const { currentTrack, isPlaying } = get();

      if (currentTrack?.id === track.id) {
        if (isPlaying) {
          audio.pause();
          set({ isPlaying: false });
        } else {
          audio.play();
          set({ isPlaying: true });
        }
        return;
      }

      audio.src = track.previewUrl;
      audio.play();

      set({
        currentTrack: track,
        isPlaying: true,
        currentTime: 0,
      });
    },

    seek: (time) => {
      audio.currentTime = time;
      set({ currentTime: time });
    },
  };
});
