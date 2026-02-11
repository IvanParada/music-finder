import {
  PlayIcon,
  NoteIcon,
  ArtistIcon,
  AlbumIcon,
  PauseIcon,
} from "../../../assets";
import { useMusicStore } from "../store/useMusicStore";
import { formatTime } from "../../../shared/helper/helper";

export default function TrackCard({ track }) {
  const playTrack = useMusicStore((s) => s.playTrack);
  const currentTrack = useMusicStore((s) => s.currentTrack);
  const isPlaying = useMusicStore((s) => s.isPlaying);

  const currentTime = useMusicStore((s) => s.currentTime);
  const duration = useMusicStore((s) => s.duration);
  const seek = useMusicStore((s) => s.seek);

  const isActive = currentTrack?.id === track.id;

  return (
    <>
      <div className="card w-full bg-[#0c0109] shadow-xl rounded-xl">
        <div className="card-body">
          <figure className="rounded-xl">
            <img
              src={track.artworkUrl}
              alt={track.title}
              className="w-full h-full object-cover"
            />
          </figure>
          <p className="card-title text-white flex gap-2" title={track.title}>
            <NoteIcon className="shrink-0 mt-1" />
            <span className="line-clamp-2">{track.title}</span>
          </p>
          <p className="text-gray-500 flex gap-2" title={track.artist}>
            <ArtistIcon className="shrink-0 mt-1" />
            <span className="line-clamp-2">{track.artist}</span>
          </p>
          <p className="text-gray-500 flex gap-2" title={track.album}>
            <AlbumIcon className="shrink-0 mt-1" />
            <span className="line-clamp-2">{track.album}</span>
          </p>

          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => playTrack(track)}
              className="cursor-pointer h-8 w-8 rounded-full bg-[#73106B] text-white grid place-items-center"
              aria-label="Play"
              title="Play"
            >
              {isActive && isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            <div className="flex-1">
              {isActive && (
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={(e) => seek(e.target.value)}
                  className="my-range range h-1"
                />
              )}
              <div className="mt-1 flex justify-end text-xs text-gray-600">
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
