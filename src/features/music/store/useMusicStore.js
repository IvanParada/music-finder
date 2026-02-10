import { create } from "zustand";

export const useMusicStore = create((set) => ({
    results: [],
    loading: false,

    fetchResults: async () => {
        set({ loading: true });

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        set({
            results: [
                { id: 1, title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", duration: "5:55", genre: "Rock" },
                { id: 2, title: "Billie Jean", artist: "Michael Jackson", album: "Thriller", duration: "4:54", genre: "Pop" },
                { id: 3, title: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV", duration: "8:02", genre: "Rock" },
                { id: 4, title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind", duration: "5:01", genre: "Grunge" },
                { id: 5, title: "Hotel California", artist: "Eagles", album: "Hotel California", duration: "6:30", genre: "Rock" },
                { id: 6, title: "Like a Rolling Stone", artist: "Bob Dylan", album: "Highway 61 Revisited", duration: "6:13", genre: "Folk Rock" },
            ],
            loading: false,
        });
    },
}));
