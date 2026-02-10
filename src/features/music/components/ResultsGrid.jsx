import { useMusicStore } from "../store/useMusicStore";
import TrackCard from "./TrackCard";

export default function ResultsGrid() {
    const { results } = useMusicStore();

    return (
        <div className="mx-auto w-full px-4 my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {results.map((track) => (
                    <TrackCard key={track.id} />
                ))}
            </div>
        </div>
    );
}   