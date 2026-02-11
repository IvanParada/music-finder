export const searchSongs = async (term = "Extremoduro") => {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${term}&media=music&limit=12`,
  );
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
