const ITUNES_BASE_URL = import.meta.env.VITE_ITUNES_BASE_URL;

export const searchSongs = async (term, limit = 12) => {
  console.log("baseurl", ITUNES_BASE_URL);
  const url = new URL("/search", ITUNES_BASE_URL);
  url.searchParams.set("term", String(term));
  url.searchParams.set("media", "music");
  url.searchParams.set("limit", String(limit));

  const response = await fetch(url);
  const data = await response.json();
  return data.results.map((result) => ({
    id: result.trackId,
    title: result.trackName,
    artist: result.artistName,
    album: result.collectionName,
    duration: formatDuration(result.trackTimeMillis),
    artworkUrl: result.artworkUrl100.replace("100x100bb", "400x400bb"),
    previewUrl: result.previewUrl,
  }));
};

const formatDuration = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
